import Link from "next/link";


interface social_links_type {
  link: string;
  target: string;
  icon: string;
}


const social_links: social_links_type[] = [
  {
    link: "https://www.facebook.com/aquabrim",
    target: "_blank",
    icon: "bi bi-facebook",
  },
  {
    link: "https://www.instagram.com/aquabrim",
    target: "_blank",
    icon: "bi bi-instagram",
  },
  {
    link: "https://www.linkedin.com/company/aquabrim",
    target: "_blank",
    icon: "bi bi-linkedin",
  },
  {
    link: "https://www.youtube.com/@aquabrim",
    target: "_blank",
    icon: "bi bi-youtube",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          target={l.target ? l.target : ""}
          rel="noopener noreferrer" style={{color: 'black'}}>
          <i className={l.icon} ></i> {' '}
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;




interface social_links_type_2 {
  link: string;
  color: string;
  icon: string;
}

const social_links_2: social_links_type_2[] = [
  {
    link: "https://www.facebook.com/aquabrim",
    color: "footer-facebook",
    icon: "bi bi-facebook",
  },
  {
    link: "https://www.instagram.com/aquabrim",
    color: "footer-insta",
    icon: "bi bi-instagram",
  },
  {
    link: "https://www.linkedin.com/company/aquabrim",
    color: "footer-linkedin",
    icon: "bi bi-linkedin",
  },
  {
    link: "https://www.youtube.com/@aquabrim",
    color: "",
    icon: "bi bi-youtube",
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_2.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className={link.color}
          target="_blank"
          rel="noopener noreferrer">
          <i className={link.icon}></i>{" "}
        </Link>
      ))}
    </>
  );
};




// team social links
interface DataType {
  id: number;
  link: string;
  icon: string;
}
const team_social_data: DataType[] = [
  {
    id: 1,
    link: "https://www.facebook.com/aquabrim",
    icon: "bi bi-facebook",
  },
  {
    id: 2,
    link: "https://www.instagram.com/aquabrim",
    icon: "bi bi-instagram",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/company/aquabrim",
    icon: "bi bi-linkedin",
  },
  {
    id: 4,
    link: "https://www.youtube.com/@aquabrim",
    icon: "bi bi-youtube",
  },
]

export const TeamSocialLinks = () => {
  return (
    <>
      {team_social_data.map((t_item, t_index) => (
        <li key={t_index}>
          <Link
            href={t_item.link}
            target="_blank"
            rel="noopener noreferrer">
            <i className={t_item.icon}></i>{" "}
          </Link>

        </li>
      ))}
    </>
  )
}


// copy right text 
type copy_right_text_type = {
  copy_right: JSX.Element;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <>
     ©{new Date().getFullYear()} | Alrights reserved by <a href="https://themeforest.net/user/theme_house" target="_blank" rel="noopener noreferrer">ThemeHouse</a>
  </>
}

const { copy_right } = copy_right_text
export const CopyRight = () => {
  return (
    <> {copy_right}</>
  )
}


