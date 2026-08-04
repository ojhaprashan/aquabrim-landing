import { fetchPageContent } from '../apiClient';
import type { HomeContent } from './home.types';

// Fetches the Home page content from the CMS.
// Returns null if the API is unreachable — the page then uses its defaults.
export const getHomeContent = (): Promise<HomeContent | null> =>
  fetchPageContent<HomeContent>('home');
