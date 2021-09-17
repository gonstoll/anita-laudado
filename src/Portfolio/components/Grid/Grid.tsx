import {ReactNode} from 'react';
import {DefaultTheme} from 'styled-components';
import {Container, Cell} from './styled';

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Sizes = {
  [bp in keyof DefaultTheme['breakpoints']]?: Size;
};

interface GridProps {
  children?: ReactNode;
}

export default function Grid({children}: GridProps) {
  return <Container>{children}</Container>;
}

export function GridCell({children, ...sizes}: GridProps & Sizes) {
  return <Cell $sizes={sizes}>{children}</Cell>;
}
