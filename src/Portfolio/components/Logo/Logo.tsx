import styled, {Theme} from 'styled-components';
import logoImage from '../../../assets/images/logo.svg';

const StyledLogo = styled.img`
  max-width: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
  transition: opacity
    ${({theme}) =>
      `${theme.transition.delay}s ${theme.transition.timingFunction}`};

  &:hover {
    opacity: 0.7;
  }
`;

interface Props {
  changeTheme: (theme?: Theme) => void;
}

export default function Logo({changeTheme}: Props) {
  return (
    <StyledLogo src={logoImage} alt="Logo" onClick={() => changeTheme()} />
  );
}
