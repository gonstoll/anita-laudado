import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {useTheme} from '../shared/hooks';
import Portfolio from '../Portfolio';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    @media screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
      font-size: 13px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
      font-size: 16px;
    }
  }

  body {
    background-color: ${props => props.theme.background};
    transition: background-color 0.3s linear;
    border-top: 4px solid ${props => props.theme.colors.black};
    font-family: ${props => props.theme.font.family};
    margin: 0;
  }

  #root {
    padding: ${props => props.theme.spacing.sm}rem;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.lg}rem;
    font-size: ${({theme}) => theme.font.sizes.sm}rem;
  }

  * {
    box-sizing: border-box;
  }
`;

export default function App() {
  const {theme, changeTheme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Portfolio changeTheme={changeTheme} />
    </ThemeProvider>
  );
}
