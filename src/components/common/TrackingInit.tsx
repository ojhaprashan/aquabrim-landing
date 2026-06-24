"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { captureTracking } from "@/utils/tracking";

/**
 * Captures Google Ads / UTM params on every page load and persists them for the
 * visit. Mounted once in the root layout so it covers all pages. Re-runs on route
 * changes so params on any landing URL (not just the first) are captured.
 */
const TrackingInit = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    captureTracking();
  }, [pathname, searchParams]);

  return null;
};

export default TrackingInit;
