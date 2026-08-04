import React from 'react';
import AboutContent from './AboutContent';
import { getReviews } from '@/lib/reviews';

// Server component: reviews are fetched at build time (the site is a static
// export) and passed to the client shell, which fetches live CMS content.
const About = async () => {
  const reviews = await getReviews();
  return <AboutContent reviews={reviews} />;
};

export default About;
