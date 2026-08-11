

import Service from '@/components/service';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import JsonLd from '@/components/common/JsonLd';
import { getMergedProducts } from '@/services/products/products.service';
import { breadcrumbSchema, pageUrl, webPageSchema } from '@/utils/schema';


export const metadata = {
  title: 'Water Level Controller Products | Buy Online | Aquabrim',
  description: "Browse Aquabrim's full range of water automation products — wireless controllers for homes, industrial multi-tank systems, alarms & accessories. Find the right fit for your setup.",
  alternates: {
    canonical: '/products/',
  },
}

const index = async () => {
  // The catalog listing is exposed as an ItemList so Google can see every
  // product URL, built from the same merged CMS/JSON source as the cards.
  const products = await getMergedProducts();

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Aquabrim Water Automation Products',
    itemListElement: products
      .filter((p) => p.slug)
      .map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title,
        url: pageUrl(`/products/${p.slug}`),
      })),
  };

  return (
    <Wrapper>
      <JsonLd
        data={[
          {
            ...webPageSchema({
              path: '/products',
              name: metadata.title,
              description: metadata.description,
            }),
            '@type': 'CollectionPage',
          },
          itemList,
          breadcrumbSchema([{ name: 'Products', path: '/products' }]),
        ]}
      />
      <Service />
    </Wrapper>
  );
};

export default index;