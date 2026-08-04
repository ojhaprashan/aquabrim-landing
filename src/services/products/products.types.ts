// Shape of the Products page content managed in the CMS.
// Every field is optional — the listing and detail pages fall back to their
// built-in products.json defaults when the CMS has not set it, so the site
// always renders. Field keys mirror the CMS template
// (D:\Aquabrim_cms\admin\src\templates\products.js) exactly.

export interface ProductsSeo {
  metaTitle?: string;
  metaDescription?: string;
  canonical?: string;
}

export interface ProductsHero {
  headingLine1?: string;
  headingLine2?: string;
  sidebarLabel?: string;
}

export interface ProductHowItWorks {
  title?: string;
  desc?: string;
}

export interface ProductSpec {
  label?: string;
  value?: string;
}

export interface ProductFaq {
  question?: string;
  answer?: string;
}

export interface ProductCta {
  title?: string;
  subtitle?: string;
  contact?: string;
}

// A single catalog product — same shape as an entry in src/data/products.json.
export interface ProductItem {
  id?: number;
  slug?: string;
  category?: string;
  categoryName?: string;
  subCategory?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  h1?: string;
  metaTitle?: string;
  metaDescription?: string;
  images?: string[];
  howItWorksImg?: string;
  longDescription?: string[];
  howItWorks?: ProductHowItWorks[];
  features?: string[];
  technicalSpecifications?: ProductSpec[];
  faqs?: ProductFaq[];
  cta?: ProductCta;
}

export interface ProductsCatalog {
  products?: ProductItem[];
}

export interface ProductsCta {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
  icon?: string;
  btnIcon?: string;
}

export interface ProductsContent {
  seo?: ProductsSeo;
  hero?: ProductsHero;
  catalog?: ProductsCatalog;
  cta?: ProductsCta;
}
