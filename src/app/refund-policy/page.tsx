import RefundPolicy from "@/components/refund-policy";
import JsonLd from "@/components/common/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/schema";

export const metadata = {
  title: "Refund & Return Policy | Aquabrim",
  description: "Learn about Aquabrim's refund and return process. Find eligibility criteria, timelines, and how to raise a return request for water level controllers and automation products.",
  alternates: {
    canonical: "/refund-policy/",
  },
};

const page = () => {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/refund-policy",
            name: metadata.title,
            description: metadata.description,
          }),
          breadcrumbSchema([{ name: "Refund Policy", path: "/refund-policy" }]),
        ]}
      />
      <RefundPolicy />
    </>
  );
};

export default page;
