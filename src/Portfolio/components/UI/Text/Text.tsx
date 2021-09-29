import {ReactNode} from 'react';
import {DefaultTheme} from 'styled-components';
import {StyledText} from './styled';

export type Size = 'title1' | 'title2' | 'title3' | 'body';

type ElementTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'label';

interface Props {
  size?: Size;
  noMargin?: 'top' | 'bottom' | 'left' | 'right' | boolean;
  color?: keyof DefaultTheme['colors'];
  element?: ElementTag;
  bold?: boolean;
  children?: ReactNode;
}

export default function Text({
  size = 'body',
  color = 'grey',
  element = 'p',
  children,
  ...extraProps
}: Props) {
  return (
    <StyledText size={size} as={element} color={color} {...extraProps}>
      {children}
    </StyledText>
  );
}