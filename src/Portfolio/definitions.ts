type LinkSection = 'contact' | 'social' | 'other';

type Links = Record<LinkSection, {link?: string; text: string}[]>;

export const links: Links = {
  contact: [
    {
      link: 'anitalaudado@gmail.com',
      text: '↳ anitalaudado@gmail.com',
    },
    {
      link: '+4550237037',
      text: '↳ (+45) 50237037',
    },
  ],
  social: [
    {
      link: '',
      text: '↳ LinkedIn',
    },
    {
      link: '',
      text: '↳ Dribbble',
    },
    {
      link: '',
      text: '↳ Medium',
    },
  ],
  other: [
    {
      link: '',
      text: '↳ Resume',
    },
    {
      link: '',
      text: '↳ My recipe blog',
    },
  ],
};
