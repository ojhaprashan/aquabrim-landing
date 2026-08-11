import ShippingPolicy from "@/components/shipping-policy";
import JsonLd from "@/components/common/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/schema";

export const metadata = {
  title: "Shipping & Delivery Policy | Aquabrim",
  description: "Aquabrim ships water level controllers and automation products across India. Find delivery timelines, shipping charges, courier partners, and how to track your Aquabrim order.",
  alternates: {
    canonical: "/shipping-policy/",
  },
};

const page = () => {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/shipping-policy",
            name: metadata.title,
            description: metadata.description,
          }),
          breadcrumbSchema([{ name: "Shipping Policy", path: "/shipping-policy" }]),
        ]}
      />
      <ShippingPolicy />
    </>
  );
};

export default page;
