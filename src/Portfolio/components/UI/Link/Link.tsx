import {ReactNode} from 'react';
import styled, {DefaultTheme} from 'styled-components';
import {defaultTheme} from '../../../../theme';

const StyledLink = styled.a<{color?: keyof DefaultTheme['colors']}>`
  color: ${({color}) =>
    color ? defaultTheme.colors[color] : defaultTheme.colors.blue};
  font-size: ${props => props.theme.font.sizes.sm}rem;
  text-decoration: none;
  display: block;
`;

interface Props {
  href: string;
  color?: keyof DefaultTheme['colors'];
  children?: ReactNode;
  download?: boolean;
}

export default function Link({href, color, children, ...rest}: Props) {
  return (
    <StyledLink href={href} color={color} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </StyledLink>
  );
}
