import resume from '../assets/docs/resume.pdf';

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
      link: 'https://dribbble.com/anitalaudado',
      text: 'Dribbble',
    },
    {
      link: 'https://medium.com/@anitalaudado',
      text: 'Medium',
    },
  ],
  other: [
    {
      link: resume,
      text: 'Resume',
    },
    {
      link: '',
      text: 'My recipe blog',
    },
  ],
};
