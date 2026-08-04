import { fetchPageContent } from '../apiClient';
import type { ContactContent } from './contact.types';

// Fetches the Contact Us page content from the CMS.
// Returns null if the API is unreachable — the page then uses its defaults.
export const getContactContent = (): Promise<ContactContent | null> =>
  fetchPageContent<ContactContent>('contact-us');
