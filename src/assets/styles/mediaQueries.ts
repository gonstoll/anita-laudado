import {DefaultTheme} from 'styled-components';
import {defaultTheme} from '../../theme';

export const media: Record<
  keyof DefaultTheme['breakpoints'],
  (styles: string) => string
> = {
  xs: (styles: string) => styles,
  sm: (
    styles: string
  ) => `@media screen and (min-width: ${defaultTheme.breakpoints.sm}px){
    ${styles}
  }`,
  md: (
    styles: string
  ) => `@media screen and (min-width: ${defaultTheme.breakpoints.md}px){
    ${styles}
  }`,
  lg: (
    styles: string
  ) => `@media screen and (min-width: ${defaultTheme.breakpoints.lg}px){
    ${styles}
  }`,
  xl: (
    styles: string
  ) => `@media screen and (min-width: ${defaultTheme.breakpoints.xl}px){
    ${styles}
  }`,
};
