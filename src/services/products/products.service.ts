import { fetchPageContent } from '../apiClient';
import type { ProductItem, ProductsContent } from './products.types';
import productsData from '@/data/products.json';
import { productSlug } from '@/utils/slug';

// Fetches the Products page content from the CMS.
// Returns null if the API is unreachable — the pages then use their defaults.
export const getProductsContent = (): Promise<ProductsContent | null> =>
  fetchPageContent<ProductsContent>('products');

// Merge a CMS product over the products.json baseline (CMS wins, but blank CMS
// fields fall back to the JSON value so nothing goes empty).
const mergeProduct = (base: any, cms: any) => {
  const out: any = { ...base };
  for (const key of Object.keys(cms || {})) {
    const v = cms[key];
    const isEmpty = v == null || v === '' || (Array.isArray(v) && v.length === 0);
    if (!isEmpty) out[key] = v;
  }
  return out;
};

// Build-time source of truth for product ROUTES + metadata.
// Starts from products.json, applies CMS overrides by slug, and appends any
// CMS-only products so they get their own static page on the next build.
// If the CMS is unreachable at build, falls back to products.json alone.
export const getMergedProducts = async (): Promise<ProductItem[]> => {
  const jsonList = (productsData as any[]).map((p) => ({ ...p, slug: productSlug(p) }));
  const content = await getProductsContent();
  const cmsList = (content?.catalog?.products ?? []).filter((p) => p.slug);

  const cmsBySlug = new Map(cmsList.map((p) => [p.slug as string, p]));
  const merged = jsonList.map((j) => {
    const cms = cmsBySlug.get(j.slug);
    if (cms) cmsBySlug.delete(j.slug);
    return cms ? mergeProduct(j, cms) : j;
  });
  // CMS-only products (not present in products.json).
  for (const cms of cmsBySlug.values()) merged.push(cms as any);

  return merged as ProductItem[];
};

export const getProductBySlug = async (slug: string): Promise<ProductItem | null> => {
  const all = await getMergedProducts();
  return all.find((p) => p.slug === slug) || null;
};
