// Shape of the Home page content managed in the CMS.
// Every field is optional — the page falls back to built-in defaults when the
// CMS has not set it, so the site always renders.

export interface HomeHero {
  headingPrefix?: string;
  animatedPhrases?: string[];
  paragraph?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  sliderImages?: string[];
}

export interface HomeAboutArea {
  image?: string;
  heading?: string;
  paragraphs?: string[];
  features?: string[];
  ctaBtnText?: string;
  ctaBtnLink?: string;
}

export interface HomeStat {
  value?: string;
  label?: string;
}

export interface HomeAboutImpact {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  stats?: HomeStat[];
}

export interface HomeAboutClients {
  heading?: string;
  logos?: string[];
}

export interface HomeServiceItem {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  slug?: string;
}

export interface HomeServices {
  eyebrow?: string;
  heading?: string;
  items?: HomeServiceItem[];
}

export interface HomeFeatureItem {
  title?: string;
  image?: string;
  wide?: boolean;
  blue?: boolean;
}

export interface HomeProductFeatures {
  heading?: string;
  items?: HomeFeatureItem[];
}

export interface HomePlatformArea {
  image?: string;
  heading?: string;
  paragraph?: string;
  appLabel?: string;
  webLink?: string;
  androidLink?: string;
  iosLink?: string;
}

export interface HomeFaq {
  question?: string;
  answer?: string;
}

export interface HomeSupportPoint {
  icon?: string;
  label?: string;
}

export interface HomeFaqArea {
  eyebrow?: string;
  heading?: string;
  faqs?: HomeFaq[];
  supportHeading?: string;
  supportParagraph?: string;
  supportPoints?: HomeSupportPoint[];
  supportPrimaryBtnText?: string;
  supportPrimaryBtnLink?: string;
  supportSecondaryBtnText?: string;
  supportSecondaryBtnLink?: string;
}

export interface HomeCta {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
  icon?: string;
  btnIcon?: string;
}

export interface HomeContent {
  hero?: HomeHero;
  aboutArea?: HomeAboutArea;
  aboutImpact?: HomeAboutImpact;
  aboutClients?: HomeAboutClients;
  services?: HomeServices;
  productFeatures?: HomeProductFeatures;
  platformArea?: HomePlatformArea;
  faqArea?: HomeFaqArea;
  cta?: HomeCta;
}
