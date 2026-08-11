import WarrantyPolicy from "@/components/warranty-policy";
import JsonLd from "@/components/common/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/schema";

export const metadata = {
  title: "Warranty Policy | Aquabrim Water Level Controllers",
  description: "Aquabrim products come with manufacturer warranty covering defects in materials and workmanship. Learn what's covered, claim process, and warranty duration for each product range.",
  alternates: {
    canonical: "/warranty-policy/",
  },
};

const page = () => {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/warranty-policy",
            name: metadata.title,
            description: metadata.description,
          }),
          breadcrumbSchema([{ name: "Warranty Policy", path: "/warranty-policy" }]),
        ]}
      />
      <WarrantyPolicy />
    </>
  );
};

export default page;
