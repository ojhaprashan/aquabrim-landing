// Shape of the Blog page content managed in the CMS.
// Every field is optional — the page falls back to built-in defaults when the
// CMS has not set it, so the site always renders.
// Mirrors D:\Aquabrim_cms\admin\src\templates\blogs.js exactly.

export interface BlogSeo {
  metaTitle?: string;
  metaDescription?: string;
  canonical?: string;
}

export interface BlogHero {
  headingLine1?: string;
  headingLine2?: string;
}

export interface BlogCategory {
  id?: string;
  name?: string;
  count?: number;
}

export interface BlogCategories {
  categories?: BlogCategory[];
}

export interface BlogPost {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  catId?: string;
  date?: string;
  readTime?: string;
  img?: string;
}

export interface BlogPosts {
  posts?: BlogPost[];
}

export interface BlogFeatured {
  widgetHeading?: string;
  image?: string;
  category?: string;
  date?: string;
  readTime?: string;
  title?: string;
  description?: string;
  link?: string;
}

export interface BlogNewsletter {
  heading?: string;
  body?: string;
  placeholder?: string;
  buttonText?: string;
}

export interface BlogCta {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
  icon?: string;
  btnIcon?: string;
}

export interface BlogContent {
  seo?: BlogSeo;
  hero?: BlogHero;
  categories?: BlogCategories;
  posts?: BlogPosts;
  featured?: BlogFeatured;
  newsletter?: BlogNewsletter;
  cta?: BlogCta;
}
