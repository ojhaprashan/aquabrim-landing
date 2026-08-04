import { fetchPageContent } from '../apiClient';
import type { PolicyContent } from './policy.types';

// Fetches a policy page's content from the CMS by its slug (e.g. 'pricing-policy').
// Returns null if the API is unreachable — the page then uses its defaults.
export const getPolicyContent = (slug: string): Promise<PolicyContent | null> =>
  fetchPageContent<PolicyContent>(slug);
