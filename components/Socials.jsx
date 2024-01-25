'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faUpwork,
} from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';

const icons = [
  {
    path: '/',
    name: <FontAwesomeIcon icon={faUpwork} />,
  },
  {
    path: '/',
    name: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    path: '/',
    name: <FontAwesomeIcon icon={faLinkedin} />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })} 
    </div>
  );
};

export default Socials
