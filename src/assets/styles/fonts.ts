import {css} from 'styled-components';

export const fontTitle1 = css`
  font-size: ${props => props.theme.font.sizes.xl}rem;
  font-weight: ${props => props.theme.font.weights.regular};
`;

export const fontTitle2 = css`
  font-size: ${props => props.theme.font.sizes.lg}rem;
  font-weight: ${props => props.theme.font.weights.regular};
`;

export const fontTitle3 = css`
  font-size: ${props => props.theme.font.sizes.md}rem;
  font-weight: ${props => props.theme.font.weights.regular};
`;

export const fontBody = css`
  font-size: ${props => props.theme.font.sizes.sm}rem;
  font-weight: ${props => props.theme.font.weights.regular};
`;
