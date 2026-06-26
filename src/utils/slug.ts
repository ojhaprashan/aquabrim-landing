// Shared slug helper so the product list, the detail page, and generateStaticParams
// all derive the exact same URL slug from a product title.
export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // spaces, parentheses, "&", etc. -> single dash
    .replace(/^-+|-+$/g, "");    // trim leading/trailing dashes

// Resolve a product's URL slug. Products carry an explicit `slug` (the exact
// endpoint the client requested); fall back to deriving one from the title.
export const productSlug = (product: { slug?: string; title: string }): string =>
  product.slug || slugify(product.title);
