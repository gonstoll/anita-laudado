import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {useTheme} from '../shared/hooks';
import Portfolio from '../Portfolio';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    transition: background-color 0.3s linear;
    border-top: 4px solid ${props => props.theme.colors.black};
  }

  body, html, #root {
    font-family: ${props => props.theme.font.family};
    margin: 0;
    font-size: 13px;
    margin: 0;

    @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
      font-size: 16px;
    }
  }

  #root {
    padding: ${props => props.theme.spacing.sm}rem;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.lg}rem;
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
