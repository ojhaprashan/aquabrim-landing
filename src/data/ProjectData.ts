import project_img_1 from "@/assets/images/resource/blog-inner1.jpg";
import project_img_2 from "@/assets/images/resource/blog-inner2.jpg";
import project_img_3 from "@/assets/images/resource/blog-inner3.jpg";
import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  img: StaticImageData;
  name: string;
  title: string;
  category: string;
}


const project_data:DataType[] = [
	{
		id: 1,
		img: project_img_1,
		name: "Smart Water Infrastructure",
		title: "City Level Automation",
		category: "Industrial",
	},
  {
		id: 2,
		img: project_img_2,
		name: "Wireless Valve System",
		title: "Residential Complex",
		category: "Residential",
	},
  {
		id: 3,
		img: project_img_3,
		name: "Advanced Pumping Station",
		title: "Commercial Setup",
		category: "Commercial",
	},
  {
		id: 4,
		img: project_img_1,
		name: "Digital Dashboard Integration",
		title: "Remote Monitoring",
		category: "Industrial",
	},
  {
		id: 5,
		img: project_img_2,
		name: "Multi-Tank Automation",
		title: "High-Rise Automation",
		category: "Commercial",
	},
  {
		id: 6,
		img: project_img_3,
		name: "Dry-Run Protection Setup",
		title: "Home Automation",
		category: "Residential",
	}
];
export default project_data;
