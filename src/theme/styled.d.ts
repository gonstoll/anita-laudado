import 'styled-components';

declare module 'styled-components' {
  export type Theme =
    | 'green'
    | 'yellow'
    | 'purple'
    | 'orange'
    | 'blue'
    | 'pink'
    | 'natural';

  export interface DefaultTheme {
    font: {
      family: string;
      sizes: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
      weights: {
        regular: number;
      };
    };

    spacing: {
      sm: number;
      lg: number;
    };

    grid: {
      columns: number;
    };

    transition: {
      delay: number;
      timingFunction: string;
    };

    colors: {
      green: string;
      yellow: string;
      purple: string;
      orange: string;
      blue: string;
      pink: string;
      natural: string;
      grey: string;
      black: string;
    };

    background: string;

    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
