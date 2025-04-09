import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaDev,
  FaHackerrank,
} from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/RajVenkat20" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/raj-venkat-reddy-mavuram/" },
  { icon: <FaMediumM />, path: "https://medium.com/@mrajvenkatreddy" },
  { icon: <FaDev />, path: "https://dev.to/rmavuram" },
  // { icon: <SiLeetcode />, path: "https://leetcode.com/u/mrajvenkatreddy/" },
  // { icon: <FaHackerrank />, path: "https://www.hackerrank.com/profile/733024CSE" },
];

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
  </div>;
};

export default Socials;
