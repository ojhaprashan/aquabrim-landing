

import blog_img_1 from "@/assets/images/resource/blog-inner1.jpg";
import blog_img_2 from "@/assets/images/resource/blog-inner2.jpg";
import blog_img_3 from "@/assets/images/resource/blog-inner3.jpg";
import { StaticImageData } from "next/image";

interface DataType {
  id: number;
  thumb: StaticImageData;
  view: number;
  comment: number;
  author: string;
  title: string;
  sm_des: string;
}[]

const blog_data: DataType[] =[
  {
    id: 1,
    thumb: blog_img_1,
    view: 155,
    comment: 25,
    author: "Bradley R Grady",
    title: "Addressing Water Infrastructure Challenges with Smart Automation",
    sm_des: "Effective water management is crucial for modern infrastructure. Discover how smart water level controllers minimize waste, optimize motor usage, and protect against dry-run scenarios in both residential and industrial settings.",
  },
  {
    id: 2,
    thumb: blog_img_2,
    view: 305,
    comment: 34,
    author: "Bradley R Grady",
    title: "How Wireless Motorized Valves Revolutionize Tank Control",
    sm_des: "Eliminate overflow and manual intervention with patented wireless motorized valve systems. We explore the benefits of seamless integration, real-time monitoring, and energy efficiency for housing societies.", 
  },
  {
    id: 3,
    thumb: blog_img_3,
    view: 543,
    comment: 44,
    author: "Bradley R Grady",
    title: "The Financial Impact of Adopting Automated Water Systems",
    sm_des: "Learn how long-term savings from reduced water wastage and lower electricity bills justify the initial investment in advanced water level detection equipment and automated supply chain solutions.", 
  },
]
export default blog_data