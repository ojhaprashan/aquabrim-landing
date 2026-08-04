// Shape of the About Us page content managed in the CMS.
// Every field is optional — the page falls back to built-in defaults when the
// CMS has not set it, so the site always renders.

export interface AboutSeo {
  metaTitle?: string;
  metaDescription?: string;
  canonicalPath?: string;
}

export interface AboutExpertiseItem {
  title?: string;
  desc?: string;
}

export interface AboutIntro {
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
  expertiseHeading?: string;
  expertiseItems?: AboutExpertiseItem[];
}

export interface AboutMissionCard {
  icon?: string;
  title?: string;
  desc?: string;
}

export interface AboutMissionVision {
  heading?: string;
  cards?: AboutMissionCard[];
}

export interface AboutMilestone {
  year?: string;
  title?: string;
  desc?: string;
}

export interface AboutJourney {
  eyebrow?: string;
  heading?: string;
  milestones?: AboutMilestone[];
}

export interface AboutTestimonials {
  eyebrow?: string;
  heading?: string;
}

export interface AboutFounder {
  name?: string;
  role?: string;
  desc?: string;
  image?: string;
  imageSide?: string;
  pills?: string[];
}

export interface AboutFounders {
  eyebrow?: string;
  heading?: string;
  founders?: AboutFounder[];
}

export interface AboutServiceStat {
  icon?: string;
  label?: string;
}

export interface AboutServiceState {
  name?: string;
  top?: string;
  left?: string;
  displayName?: string;
  isHeadOffice?: boolean;
}

export interface AboutServiceArea {
  eyebrow?: string;
  heading?: string;
  stats?: AboutServiceStat[];
  ctaButtonText?: string;
  ctaButtonLink?: string;
  mapImage?: string;
  states?: AboutServiceState[];
}

export interface AboutCtaBanner {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
  icon?: string;
  btnIcon?: string;
}

export interface AboutContent {
  seo?: AboutSeo;
  aboutIntro?: AboutIntro;
  missionVision?: AboutMissionVision;
  journey?: AboutJourney;
  testimonials?: AboutTestimonials;
  founders?: AboutFounders;
  serviceArea?: AboutServiceArea;
  ctaBanner?: AboutCtaBanner;
}
