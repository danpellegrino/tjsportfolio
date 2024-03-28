"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

const icons = [
  {
    path: "https://www.upwork.com/freelancers/~015d66e8259ccfeb32",
    name: <FontAwesomeIcon icon={faUpwork} />,
  },
  {
    path: "http://instagram.com/tjs_designss",
    name: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    path: "https://www.linkedin.com/in/tyler-senecal-511b0824a/",
    name: <FontAwesomeIcon icon={faLinkedin} />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
