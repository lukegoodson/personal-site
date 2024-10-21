import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://www.linkedin.com/in/lukegoodson',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/lukegoodson',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/sneaky._.squid/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'mailto:lukejgoodson@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
