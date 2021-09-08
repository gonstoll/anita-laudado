import {css} from 'styled-components';

export const fontTitle1 = css`
  font-size: ${props => props.theme.font.sizes.xlarge}rem;
  font-weight: ${props => props.theme.font.weights.regular};
`;

export const fontTitle2 = css`
  font-size: ${props => props.theme.font.sizes.large}rem;
  font-weight: ${props => props.theme.font.weights.regular};
`;

export const fontTitle3 = css`
  font-size: ${props => props.theme.font.sizes.medium}rem;
  font-weight: ${props => props.theme.font.weights.regular};
`;

export const fontBody = css`
  font-size: ${props => props.theme.font.sizes.small}rem;
  font-weight: ${props => props.theme.font.weights.regular};
`;
