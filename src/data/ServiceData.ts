

import service_img_1 from "@/assets/images/resource/prod_controller.png";
import service_img_2 from "@/assets/images/resource/prod_valve.png";
import service_img_3 from "@/assets/images/resource/prod_tank_monitor.png";
import service_img_4 from "@/assets/images/resource/prod_starter.png";

import service_icon_1 from "@/assets/images/resource/service-icon1.png";
import service_icon_2 from "@/assets/images/resource/service-icon2.png";
import service_icon_3 from "@/assets/images/resource/service-icon3.png";
import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  path: string;
  img: StaticImageData;
  icon: StaticImageData;
  title: string;
  sm_des: string;
}



const service_data: DataType[] = [
  // home 01
  {
    id: 1,
    path: "home_1",
    img: service_img_1,
    icon: service_icon_1,
    title: "Water Level Controllers",
    sm_des: "Prevent tank overflow and protect motors from dry-run with our advanced automated systems.",
  },
  {
    id: 2,
    path: "home_1",
    img: service_img_2,
    icon: service_icon_2,
    title: "Wireless Valve Systems",
    sm_des: "Precise control for overhead and underground tanks with our patented wireless motorized valves.",
  },
  {
    id: 3,
    path: "home_1",
    img: service_img_3,
    icon: service_icon_3,
    title: "Smart Tank Monitoring",
    sm_des: "Real-time alerts and accurate water level detection for homes, apartments, and industries.",
  },
  {
    id: 4,
    path: "home_1",
    img: service_img_4,
    icon: service_icon_1,
    title: "Automatic Motor Starters",
    sm_des: "Protect your motors from voltage fluctuations and ensure smooth operations with our smart starters.",
  },
  {
    id: 5,
    path: "home_1",
    img: service_img_2,
    icon: service_icon_2,
    title: "Industrial Water Control",
    sm_des: "Scalable water management solutions for large scale industries and commercial complexes.",
  },
  {
    id: 6,
    path: "home_1",
    img: service_img_3,
    icon: service_icon_3,
    title: "Custom Automation",
    sm_des: "Bespoke water automation systems tailored to your specific household or industrial needs.",
  },

  // service
  {
    id: 1,
    path: "service",
    img: service_img_2,
    icon: service_icon_2,
    title: "Wireless Valve Systems",
    sm_des: "Precise control for overhead and underground tanks with our patented wireless motorized valves.",
  },
  {
    id: 2,
    path: "service",
    img: service_img_3,
    icon: service_icon_3,
    title: "Smart Tank Monitoring",
    sm_des: "Real-time alerts and accurate water level detection for homes, apartments, and industries.",
  },
  {
    id: 3,
    path: "service",
    img: service_img_1,
    icon: service_icon_1,
    title: "Water Level Controllers",
    sm_des: "Prevent tank overflow and protect motors from dry-run with our advanced automated systems.",
  },


]
export default service_data