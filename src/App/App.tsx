import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {useTheme} from '../shared/hooks';
import Portfolio from '../Portfolio';
import SctoGroteskAWoff from '../assets/fonts/Scto_Grotesk_A.woff2';
import SctoGroteskAWoff2 from '../assets/fonts/Scto_Grotesk_A.woff2';

const GlobalStyles = createGlobalStyle`
  body, html, #root {
    background-color: ${({theme}) => theme.background};
    font-family: ${({theme}) => theme.font.family};
    transition: background-color .3s linear;
    height: 100%;
    margin: 0;
    font-size: 12px;
    margin: 0;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
      font-size: 16px;
    }
  }

  #root {
    padding: ${({theme}) => theme.spacing.sm}rem;
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.lg}rem;
  }

  * {
    box-sizing: border-box;
  }
`;

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Scto Grotesk A';
    font-weight: 400;
    font-display: block;
    src: local('Scto Grotesk A'), local('Scto Grotesk A'),
        url(${SctoGroteskAWoff2}) format('woff2'),
        url(${SctoGroteskAWoff}) format('woff');
  }
`;

export default function App() {
  const {theme, changeTheme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Fonts />
      <GlobalStyles />
      <Portfolio changeTheme={changeTheme} />
    </ThemeProvider>
  );
}
