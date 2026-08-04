'use client';
import React, { useEffect, useState } from 'react';
import type { StaticImageData } from 'next/image';
import PolicyBanner from './PolicyBanner';
import { PolicyArea, PolicySection } from './PolicyKit';
import CtaBanner from './CtaBanner';
import { getPolicyContent } from '@/services/policy/policy.service';
import type { PolicyContent } from '@/services/policy/policy.types';

type NavItem = { href: string; label: string };

type BannerDefaults = {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
};

type CtaDefaults = {
  title: string;
  subtitle: string;
  btnText: string;
  btnLink: string;
  icon: string;
  btnIcon: string;
};

type Props = {
  slug: string;
  defaultBanner: BannerDefaults;
  defaultLastUpdated: string;
  defaultNav: NavItem[];
  defaultCta: CtaDefaults;
  fallbackBody: React.ReactNode;
};

// Reusable client wrapper for the six policy pages. Content is managed in the
// CMS and fetched in the browser so edits reflect live without a rebuild.
// Until (and unless) the CMS provides content, the page renders its built-in
// defaults, so it always looks identical to the hardcoded version.
const PolicyPageContent = ({
  slug,
  defaultBanner,
  defaultLastUpdated,
  defaultNav,
  defaultCta,
  fallbackBody,
}: Props) => {
  const [content, setContent] = useState<PolicyContent | null>(null);

  useEffect(() => {
    getPolicyContent(slug).then(setContent);
  }, [slug]);

  const banner = content?.banner;
  const cta = content?.cta;

  // Only treat the CMS body as authoritative when an admin has actually filled
  // in at least one section body. Otherwise keep the rich hardcoded fallback.
  const cmsSections = content?.body?.sections?.filter(
    (s) => typeof s?.body === 'string' && s.body.trim() !== '',
  );
  const hasCmsBody = !!cmsSections && cmsSections.length > 0;

  const nav: NavItem[] = hasCmsBody
    ? cmsSections!.map((s) => ({ href: `#${s.id ?? ''}`, label: s.title ?? '' }))
    : defaultNav;

  return (
    <>
      <main>
        <PolicyBanner
          image={banner?.image || defaultBanner.image}
          title={banner?.title || defaultBanner.title}
          subtitle={banner?.subtitle || defaultBanner.subtitle}
        />
        <PolicyArea lastUpdated={content?.meta?.lastUpdated || defaultLastUpdated} nav={nav}>
          {hasCmsBody
            ? cmsSections!.map((s, i) => (
                <PolicySection key={s.id ?? i} id={s.id ?? ''} title={s.title ?? ''}>
                  <div
                    className="text-[1.05rem] leading-[1.8] text-[#6c757d]"
                    dangerouslySetInnerHTML={{ __html: s.body ?? '' }}
                  />
                </PolicySection>
              ))
            : fallbackBody}
        </PolicyArea>
      </main>
      <CtaBanner
        title={cta?.title || defaultCta.title}
        subtitle={cta?.subtitle || defaultCta.subtitle}
        btnText={cta?.btnText || defaultCta.btnText}
        btnLink={cta?.btnLink || defaultCta.btnLink}
        icon={cta?.icon || defaultCta.icon}
        btnIcon={cta?.btnIcon || defaultCta.btnIcon}
      />
    </>
  );
};

export default PolicyPageContent;
