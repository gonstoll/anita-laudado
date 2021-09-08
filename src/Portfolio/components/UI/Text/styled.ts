import styled from 'styled-components';
import {
  fontTitle1,
  fontTitle2,
  fontTitle3,
  fontBody,
} from '../../../../assets/styles/fonts';
import {Size} from '.';

const fontStyles = {
  title1: fontTitle1,
  title2: fontTitle2,
  title3: fontTitle3,
  body: fontBody,
};

export const StyledText = styled.p<{
  size: Size;
}>`
  ${props => fontStyles[props.size]}
`;
