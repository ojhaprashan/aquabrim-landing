import React from 'react';

// Renders one or more schema.org JSON-LD blocks. Nulls are skipped so callers
// can pass a builder that returns null (e.g. faqSchema with no FAQs).
const JsonLd = ({ data }: { data: unknown | unknown[] }) => {
  const items = (Array.isArray(data) ? data : [data]).filter(Boolean);
  if (!items.length) return null;

  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
};

export default JsonLd;
