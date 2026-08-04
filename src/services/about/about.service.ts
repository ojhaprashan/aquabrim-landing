import { fetchPageContent } from '../apiClient';
import type { AboutContent } from './about.types';

// Fetches the About Us page content from the CMS.
// Returns null if the API is unreachable — the page then uses its defaults.
export const getAboutContent = (): Promise<AboutContent | null> =>
  fetchPageContent<AboutContent>('about-us');
