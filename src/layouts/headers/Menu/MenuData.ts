


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
		link: "/about-us",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Products",
		link: "/products",
		has_dropdown: false,
	},
	{
		id: 4,
		title: "Blog",
		link: "/blogs",
		has_dropdown: false,
	},
	{
		id: 5,
		title: "Contact Us",
		link: "/contact-us",
		has_dropdown: false,
	},
	{
		id: 6,
		title: "Support",
		link: "/contact-us",
		has_dropdown: false,
	},
];
export default menu_data;
