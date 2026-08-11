// Central JSON-LD (schema.org structured data) builders.
//
// Everything Google reads about our pages is generated here from the SAME data
// the pages render, so schema can never drift from what's on screen — a hard
// requirement of Google's structured-data policy.
//
// Add the output to a page with <JsonLd data={...} /> (src/components/common/JsonLd.tsx).

export const SITE_URL = 'https://www.aquabrim.com';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const abs = (path: string) =>
  path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;

/** Trailing-slash canonical URL for a route, matching our `alternates.canonical`. */
export const pageUrl = (path: string) => {
  if (path === '/' || path === '') return `${SITE_URL}/`;
  const clean = `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return `${SITE_URL}${clean}`;
};

/* ------------------------------------------------------------------ *
 * 1. Organization + WebSite (homepage)
 * ------------------------------------------------------------------ */

const SOCIAL_PROFILES = [
  'https://www.facebook.com/aquabrim',
  'https://www.instagram.com/aquabrim',
  'https://www.linkedin.com/company/aquabrim',
  'https://www.youtube.com/@aquabrim',
];

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Aquabrim',
  legalName: 'Aquabrim Private Limited',
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: abs('/assets/images/logo_blue.png'),
  },
  image: abs('/assets/images/logo_blue.png'),
  description:
    'Aquabrim delivers smart, affordable, and reliable water automation solutions for homes, apartments, and industries. Efficient water level management since 2008.',
  foundingDate: '2008',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9560088791',
      email: 'save.water@aquabrim.com',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  ],
  sameAs: SOCIAL_PROFILES,
});

export const webSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'Aquabrim',
  inLanguage: 'en-IN',
  publisher: { '@id': ORG_ID },
});

/* ------------------------------------------------------------------ *
 * 2. BreadcrumbList (all pages)
 * ------------------------------------------------------------------ */

export type Crumb = { name: string; path: string };

/**
 * `crumbs` must NOT include Home — it is prepended automatically.
 * e.g. breadcrumbSchema([{ name: 'Products', path: '/products' }, { name: 'Trigger', path: '/products/trigger' }])
 */
export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: pageUrl(c.path),
  })),
});

/* ------------------------------------------------------------------ *
 * 3. Product (product detail pages)
 * ------------------------------------------------------------------ */

type ProductLike = {
  slug?: string;
  title?: string;
  h1?: string;
  description?: string;
  metaDescription?: string;
  longDescription?: string[];
  images?: string[];
  categoryName?: string;
  sku?: string;
  mpn?: string;
  price?: string | number;
  priceCurrency?: string;
  availability?: string;
  technicalSpecifications?: Array<{ label?: string; value?: string }>;
};

/**
 * Product schema built from the merged CMS/products.json record.
 *
 * `offers` is emitted ONLY when the product actually carries a price, and
 * ratings are never invented — publishing a price or rating that isn't on the
 * page violates Google's policy and can trigger a manual action.
 */
export const productSchema = (product: ProductLike) => {
  const name = product.title || product.h1 || '';
  const description =
    product.metaDescription || product.description || product.longDescription?.[0] || '';

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${pageUrl(`/products/${product.slug}`)}#product`,
    name,
    description,
    url: pageUrl(`/products/${product.slug}`),
    brand: { '@type': 'Brand', name: 'Aquabrim' },
    manufacturer: { '@id': ORG_ID },
  };

  const images = (product.images || []).filter(Boolean).map(abs);
  if (images.length) schema.image = images;

  if (product.categoryName) schema.category = product.categoryName;
  if (product.sku) schema.sku = product.sku;
  if (product.mpn) schema.mpn = product.mpn;

  // Technical specs become machine-readable properties.
  const specs = (product.technicalSpecifications || []).filter((s) => s?.label && s?.value);
  if (specs.length) {
    schema.additionalProperty = specs.map((s) => ({
      '@type': 'PropertyValue',
      name: s.label,
      value: s.value,
    }));
  }

  if (product.price != null && product.price !== '') {
    schema.offers = {
      '@type': 'Offer',
      url: pageUrl(`/products/${product.slug}`),
      price: String(product.price),
      priceCurrency: product.priceCurrency || 'INR',
      availability: `https://schema.org/${product.availability || 'InStock'}`,
      seller: { '@id': ORG_ID },
    };
  }

  return schema;
};

/* ------------------------------------------------------------------ *
 * 4. BlogPosting (blog detail pages)
 * ------------------------------------------------------------------ */

type BlogLike = {
  slug: string;
  title: string;
  metaDescription?: string;
  excerpt?: string;
  image: string;
  imageAlt?: string;
  author: string;
  date: string;
  category?: string;
  tags?: string[];
};

/** Converts our display dates ("10 Jul 2026") to ISO-8601, which Google requires. */
export const toIsoDate = (value: string): string | null => {
  if (!value) return null;
  if (/^\d{4}-\d{2}-\d{2}/.test(value)) return value;
  const parsed = new Date(`${value} UTC`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toISOString().slice(0, 10);
};

export const blogPostingSchema = (blog: BlogLike) => {
  const url = pageUrl(`/blogs/${blog.slug}`);
  const published = toIsoDate(blog.date);

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: blog.title,
    description: blog.metaDescription || blog.excerpt,
    image: [abs(blog.image)],
    author: { '@type': 'Organization', name: blog.author, url: `${SITE_URL}/` },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
  };

  if (published) {
    schema.datePublished = published;
    schema.dateModified = published;
  }
  if (blog.category) schema.articleSection = blog.category;
  if (blog.tags?.length) schema.keywords = blog.tags.join(', ');

  return schema;
};

/* ------------------------------------------------------------------ *
 * 5. FAQPage (any page rendering an FAQ block)
 * ------------------------------------------------------------------ */

type FaqLike = { question?: string; answer?: string };

/** Returns null when there are no usable FAQs, so callers can skip the tag. */
export const faqSchema = (faqs: FaqLike[] | undefined) => {
  const items = (faqs || []).filter((f) => f?.question && f?.answer);
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
};

/* ------------------------------------------------------------------ *
 * 6. ContactPage (contact page)
 * ------------------------------------------------------------------ */

export const contactPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${pageUrl('/contact-us')}#contactpage`,
  url: pageUrl('/contact-us'),
  name: 'Contact Aquabrim',
  description:
    'Contact Aquabrim for water level controllers, installation support & expert advice. Offices in Delhi, Bangalore & Pune.',
  inLanguage: 'en-IN',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  mainEntity: {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Aquabrim',
    url: `${SITE_URL}/`,
    telephone: '+91-9560088791',
    email: 'save.water@aquabrim.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
  },
});

/* ------------------------------------------------------------------ *
 * Generic WebPage — used by the policy/legal pages.
 * ------------------------------------------------------------------ */

export const webPageSchema = ({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl(path)}#webpage`,
  url: pageUrl(path),
  name,
  ...(description ? { description } : {}),
  inLanguage: 'en-IN',
  isPartOf: { '@id': WEBSITE_ID },
  publisher: { '@id': ORG_ID },
});
