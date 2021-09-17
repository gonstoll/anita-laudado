import {DefaultTheme, Theme} from 'styled-components';

export const defaultTheme: Omit<DefaultTheme, 'background'> = {
  font: {
    family: 'Scto Grotesk A, sans-serif',
    sizes: {
      sm: 1.25,
      md: 1.5,
      lg: 1.875,
      xl: 4.375,
    },
    weights: {
      regular: 400,
    },
  },

  spacing: {
    sm: 2.5,
    lg: 5,
  },

  grid: {
    columns: 12,
  },

  transition: {
    delay: 0.3,
    timingFunction: 'ease-in-out',
  },

  colors: {
    green: '#D4ECDC',
    yellow: '#FCF9DA',
    purple: '#DCD8EE',
    orange: '#FCDFD7',
    blue: '#E1EBF5',
    pink: '#F1E7EB',
    natural: '#F9F7F4',
    grey: '#35332F',
    black: '#000000',
  },

  breakpoints: {
    xs: 0,
    sm: 565,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

const themes: Record<Theme, DefaultTheme> = {
  green: {
    ...defaultTheme,
    background: defaultTheme.colors.green,
  },
  yellow: {
    ...defaultTheme,
    background: defaultTheme.colors.yellow,
  },
  purple: {
    ...defaultTheme,
    background: defaultTheme.colors.purple,
  },
  orange: {
    ...defaultTheme,
    background: defaultTheme.colors.orange,
  },
  blue: {
    ...defaultTheme,
    background: defaultTheme.colors.blue,
  },
  pink: {
    ...defaultTheme,
    background: defaultTheme.colors.pink,
  },
  natural: {
    ...defaultTheme,
    background: defaultTheme.colors.natural,
  },
};

export {themes};
