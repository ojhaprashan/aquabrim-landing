import { fetchPageContent } from '../apiClient';
import type { BlogContent } from './blog.types';

// Fetches the Blog page content from the CMS.
// Returns null if the API is unreachable — the page then uses its defaults.
export const getBlogContent = (): Promise<BlogContent | null> =>
  fetchPageContent<BlogContent>('blogs');
