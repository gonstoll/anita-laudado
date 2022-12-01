import resume from '../assets/docs/Ana_Laudado_2022.pdf';

type LinkSection = 'contact' | 'social' | 'other';

type Links = Record<LinkSection, {link: string; text: string}[]>;

export const links: Links = {
  contact: [
    {
      link: 'mailto:anitalaudado@gmail.com',
      text: 'anitalaudado@gmail.com',
    },
    {
      link: 'tel:+4550237037',
      text: '(+45) 50237037',
    },
  ],
  social: [
    {
      link: 'https://www.linkedin.com/in/ana-laudado/',
      text: 'LinkedIn',
    },
    {
      link: 'https://www.behance.net/anitalaudado',
      text: 'Behance',
    },
  ],
  other: [
    {
      link: resume,
      text: 'Resume',
    },
  ],
};
