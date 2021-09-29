import styled, {DefaultTheme} from 'styled-components';
import {defaultTheme} from '../../../../theme';
import {
  fontTitle1,
  fontTitle2,
  fontTitle3,
  fontBody,
} from '../../../../assets/styles/fonts';
import {Size} from './Text';

const fontStyles = {
  title1: fontTitle1,
  title2: fontTitle2,
  title3: fontTitle3,
  body: fontBody,
};

export const StyledText = styled.p<{
  size: Size;
  noMargin?: 'top' | 'bottom' | 'left' | 'right' | boolean;
  color?: keyof DefaultTheme['colors'];
  bold?: boolean;
}>`
  ${({color}) => color && `color: ${defaultTheme.colors[color]};`};
  ${({size}) => fontStyles[size]};
  ${({bold}) => bold && 'font-weight: 700'};
  ${({noMargin}) => {
    if (!noMargin) return null;
    switch (noMargin) {
      case 'top':
      case 'right':
      case 'bottom':
      case 'left':
        return `margin-${noMargin}: 0;`;
      default: {
        return 'margin: 0';
      }
    }
  }};
`;
