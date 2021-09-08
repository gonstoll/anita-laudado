import {DefaultTheme, Theme} from 'styled-components';

const defaultTheme: Omit<DefaultTheme, 'background'> = {
  font: {
    family: 'Gordita, sans-serif',
    sizes: {
      small: 1.25,
      medium: 1.5,
      large: 1.875,
      xlarge: 4.375,
    },
    weights: {
      regular: 400,
    },
  },

  spacing: {
    small: 2.5,
    large: 5,
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
    small: 565,
    medium: 768,
    large: 992,
    xlarge: 1200,
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
