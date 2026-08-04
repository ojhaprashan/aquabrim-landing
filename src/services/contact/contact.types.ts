// Shape of the Contact Us page content managed in the CMS.
// Every field is optional — the page falls back to built-in defaults when the
// CMS has not set it, so the site always renders.

export interface ContactSeo {
  metaTitle?: string;
  metaDescription?: string;
  canonical?: string;
}

export interface ContactHeading {
  line1?: string;
  line2?: string;
}

export interface ContactForm {
  formTitle?: string;
  formSubtitle?: string;
  submitText?: string;
  successMessage?: string;
  queryTypes?: string[];
}

export interface ContactOffice {
  title?: string;
  addressLabel?: string;
  address?: string;
  person?: string;
  phone?: string;
  emails?: string[];
}

export interface ContactOffices {
  offices?: ContactOffice[];
}

export interface ContactMap {
  embedSrc?: string;
  linkUrl?: string;
  linkText?: string;
}

export interface ContactCta {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
  icon?: string;
  btnIcon?: string;
}

export interface ContactContent {
  seo?: ContactSeo;
  heading?: ContactHeading;
  form?: ContactForm;
  offices?: ContactOffices;
  map?: ContactMap;
  cta?: ContactCta;
}
