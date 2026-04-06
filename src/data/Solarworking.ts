

import service_img_1 from "@/assets/images/resource/service1.png";
import service_img_2 from "@/assets/images/resource/service2.png";
import service_img_3 from "@/assets/images/resource/service3.png";

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
    title: "Water Sensors",
    sm_des: "Robust water level sensors are installed in your overhead or underground tanks to detect current levels accurately.",
  },
  {
    id: 2,
    path: "home_1",
    img: service_img_2,
    icon: service_icon_2,
    title: "Controller Unit",
    sm_des: "The sensor signals are sent to the smart controller unit, which processes the data to determine if water needs are met.",
  },
  {
    id: 3,
    path: "home_1",
    img: service_img_3,
    icon: service_icon_3,
    title: "Motorized Valve",
    sm_des: "The controller automatically manages the motorized valves and water pump to maintain optimal tank levels and prevent dry running.",
  },

  // service
  {
    id: 1,
    path: "service",
    img: service_img_2,
    icon: service_icon_2,
    title: "Residential Automation",
    sm_des: "Effortless water management for homes, ensuring no overflow and protecting your water pumps.",
  },
  {
    id: 2,
    path: "service",
    img: service_img_3,
    icon: service_icon_3,
    title: "Society Tank Management",
    sm_des: "Comprehensive systems for apartment buildings and multi-tank architectures using wireless sensors.",
  },
  {
    id: 3,
    path: "service",
    img: service_img_1,
    icon: service_icon_1,
    title: "Industrial Controllers",
    sm_des: "Heavy-duty automated setups designed to handle large-scale water flow and precise level maintenance.",
  },


]
export default service_data