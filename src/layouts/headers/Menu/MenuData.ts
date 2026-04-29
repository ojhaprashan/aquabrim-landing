


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


const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "About Us",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Products",
		link: "/service",
		has_dropdown: false,
	},
	{
		id: 4,
		title: "Blog",
		link: "/blog",
		has_dropdown: false,
	},
	{
		id: 5,
		title: "Contact Us",
		link: "/contact",
		has_dropdown: false,
	},
	{
		id: 6,
		title: "Support",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
