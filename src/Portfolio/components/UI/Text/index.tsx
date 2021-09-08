import {ReactNode} from 'react';
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
  size: Size;
  element?: ElementTag;
  children?: ReactNode;
}

export default function Text({size, element, children, ...extraProps}: Props) {
  return (
    <StyledText size={size} as={element} {...extraProps}>
      {children}
    </StyledText>
  );
}
