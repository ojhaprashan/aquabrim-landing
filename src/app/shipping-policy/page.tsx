import ShippingPolicy from "@/components/shipping-policy";

export const metadata = {
  title: "Shipping & Delivery Policy | Aquabrim",
  description: "Aquabrim ships water level controllers and automation products across India. Find delivery timelines, shipping charges, courier partners, and how to track your Aquabrim order.",
  alternates: {
    canonical: "/shipping-policy/",
  },
};

const page = () => {
  return <ShippingPolicy />;
};

export default page;
