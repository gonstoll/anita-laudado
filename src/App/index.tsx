import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {useTheme} from '../shared/hooks';
import Portfolio from '../Portfolio';
import GorditaFont from '../assets/fonts/Gordita_Medium.woff';

const GlobalStyles = createGlobalStyle`
  body, html, #root {
    background-color: ${({theme}) => theme.background};
    font-family: ${({theme}) => theme.font.family};
    transition: background-color .3s linear;
    height: 100%;
    margin: 0;
    overflow: hidden;
    font-size: 12px;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.medium}) {
      font-size: 16px;
    }
  }
`;

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Gordita';
    src: local('Gordita'), local('Gordita'),
    url(${GorditaFont}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;

export default function App() {
  const {theme, changeTheme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Fonts />
      <Portfolio changeTheme={changeTheme} />
    </ThemeProvider>
  );
}
