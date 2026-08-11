import PrivacyPolicy from "@/components/privacy-policy";
import JsonLd from "@/components/common/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/schema";

export const metadata = {
  title: "Privacy Policy | How Aquabrim Protects Your Data",
  description: "Read Aquabrim's Privacy Policy to understand how we collect, store, and protect your personal information when you use our website, products, and support services.",
  alternates: {
    canonical: "/privacy-policy/",
  },
};

const page = () => {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/privacy-policy",
            name: metadata.title,
            description: metadata.description,
          }),
          breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy-policy" }]),
        ]}
      />
      <PrivacyPolicy />
    </>
  );
};

export default page;
