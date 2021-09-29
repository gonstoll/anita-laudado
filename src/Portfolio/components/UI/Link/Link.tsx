import {ReactNode} from 'react';
import styled, {DefaultTheme} from 'styled-components';
import {defaultTheme} from '../../../../theme';

const StyledLink = styled.a<{color?: keyof DefaultTheme['colors']}>`
  color: ${({color}) =>
    color ? defaultTheme.colors[color] : defaultTheme.colors.blue};
  text-decoration: none;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  href: string;
  color?: keyof DefaultTheme['colors'];
  children?: ReactNode;
}

export default function Link({href, color = 'grey', children, ...rest}: Props) {
  return (
    <StyledLink
      href={href}
      color={color}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      {children}
    </StyledLink>
  );
}
