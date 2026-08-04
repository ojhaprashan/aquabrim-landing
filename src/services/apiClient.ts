import axios from 'axios';

// Shared axios instance for talking to the Aquabrim CMS API.
// Every page service imports this — one place to configure baseURL, timeout, etc.
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// The API always wraps payloads as { data: ... }. This helper unwraps the
// `content` of a page response and returns null on any failure, so pages can
// safely fall back to their built-in defaults and never crash on a bad request.
export async function fetchPageContent<T>(slug: string): Promise<T | null> {
  try {
    const res = await apiClient.get(`/${slug}`);
    return (res.data?.data?.content as T) ?? null;
  } catch {
    return null;
  }
}

export default apiClient;
