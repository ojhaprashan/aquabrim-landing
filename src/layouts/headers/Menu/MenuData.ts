


interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
      link: string;
      title: string;
  }[];
}


// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: false,
		
	},
	// {
	// 	id: 2,
	// 	title: "Abouut",
	// 	link: "/about",
	// 	has_dropdown: false,
	// },
	
	
	
	{
		id: 4,
		title: "Finance",
		link: "/finance",
		has_dropdown: false,
		
	},
	{
		id: 4,
		title: "Operations",
		link: "/operations",
		has_dropdown: false,
		
	},
	{
		id: 4,
		title: "Community Engagement ",
		link: "/community",
		has_dropdown: false,
		
	},
	{
		id: 3,
		title: "Services",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/service", title: "Services" },
			{ link: "/service-details", title: "Services Details" },
		],
	},
	{
		id: 4,
		title: "Projects",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/project-grid", title: "Project Grid" },
			{ link: "/project-details", title: "Project Details" },
		],
	},
	// {
	// 	id: 5,
	// 	title: "Pages",
	// 	link: "#",
	// 	has_dropdown: true,
	// 	sub_menus: [
	// 		{ link: "/blog", title: "Blog" },
	// 		{ link: "/blog-details", title: "Blog Details " },
	// 		{ link: "/team", title: "Team " },
	// 		{ link: "/team-details", title: "Team Details" },
	// 		{ link: "/faq", title: "FAQ" },
	// 		{ link: "/erorr", title: "Erorr" },
	// 	],
	// },
	// {
	// 	id: 6,
	// 	title: "Contact",
	// 	link: "/contact",
	// 	has_dropdown: false,
	// },
];
export default menu_data;
