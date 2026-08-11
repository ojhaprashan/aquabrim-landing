import TermsCondition from "@/components/terms-condition";
import JsonLd from "@/components/common/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/schema";

export const metadata = {
  title: "Terms & Conditions | Aquabrim",
  description: "Read Aquabrim's Terms & Conditions for using our website, placing orders, and using our products and services. Understand your rights and our obligations as a company.",
  alternates: {
    canonical: "/terms-and-conditions/",
  },
};

const page = () => {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/terms-and-conditions",
            name: metadata.title,
            description: metadata.description,
          }),
          breadcrumbSchema([
            { name: "Terms & Conditions", path: "/terms-and-conditions" },
          ]),
        ]}
      />
      <TermsCondition />
    </>
  );
};

export default page;
