// Shape of the content managed in the CMS for the six policy pages.
// They all share one structure: seo + banner + lastUpdated + a list of
// content sections + a CTA banner. Every field is optional — each page falls
// back to its built-in defaults when the CMS has not set it, so the site
// always renders.

export interface PolicySeo {
  metaTitle?: string;
  metaDescription?: string;
  canonical?: string;
}

export interface PolicyBanner {
  image?: string;
  title?: string;
  subtitle?: string;
}

export interface PolicyMeta {
  lastUpdated?: string;
}

export interface PolicyBodySection {
  id?: string;
  title?: string;
  body?: string;
}

export interface PolicyBody {
  sections?: PolicyBodySection[];
}

export interface PolicyCta {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
  icon?: string;
  btnIcon?: string;
}

export interface PolicyContent {
  seo?: PolicySeo;
  banner?: PolicyBanner;
  meta?: PolicyMeta;
  body?: PolicyBody;
  cta?: PolicyCta;
}
