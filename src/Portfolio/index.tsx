import {Theme} from 'styled-components';
import Logo from './components/Logo';
import Hero from './components/Hero';
import SubHero from './components/SubHero';
import Footer from './components/Footer';

interface Props {
  changeTheme: (theme?: Theme) => void;
}

export default function Portfolio({changeTheme}: Props) {
  return (
    <>
      <Logo changeTheme={changeTheme} />
      <Hero />
      <SubHero />
      <Footer />
    </>
  );
}
