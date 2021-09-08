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
        small: number;
        medium: number;
        large: number;
        xlarge: number;
      };
      weights: {
        regular: number;
      };
    };

    spacing: {
      small: number;
      large: number;
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
      small: number;
      medium: number;
      large: number;
      xlarge: number;
    };
  }
}
