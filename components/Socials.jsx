import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaDev,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/RajVenkat20" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/raj-venkat-reddy-mavuram/" },
  { icon: <FaMediumM />, path: "https://medium.com/@mrajvenkatreddy" },
  { icon: <FaDev />, path: "https://dev.to/rmavuram" },
  { icon: <FaTwitter />, path: "https://x.com/mrajvenkatreddy" },
];

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
  </div>;
};

export default Socials;
