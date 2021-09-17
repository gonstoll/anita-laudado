import styled from 'styled-components';
import {Sizes} from './Grid';
import {media} from '../../../assets/styles/mediaQueries';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${({theme}) => theme.spacing.sm / 2}rem;
  margin-right: -${({theme}) => theme.spacing.sm / 2}rem;
`;

export const Cell = styled.div<{$sizes?: Sizes}>`
  padding: 0 ${({theme}) => theme.spacing.sm / 2}rem;
  flex: 0 0 auto;

  ${props => {
    if (!props.$sizes) return 'width: 100%';
    return `
      width: ${
        props.$sizes.xs
          ? `${(props.$sizes.xs / props.theme.grid.columns) * 100}%;`
          : 'auto;'
      }
      ${
        props.$sizes.sm
          ? media.sm(
              `width: ${(props.$sizes.sm / props.theme.grid.columns) * 100}%;`
            )
          : ''
      }
      ${
        props.$sizes.md
          ? media.md(
              `width: ${(props.$sizes.md / props.theme.grid.columns) * 100}%;`
            )
          : ''
      }
      ${
        props.$sizes.lg
          ? media.lg(
              `width: ${(props.$sizes.lg / props.theme.grid.columns) * 100}%;`
            )
          : ''
      }
      ${
        props.$sizes.xl
          ? media.xl(
              `width: ${(props.$sizes.xl / props.theme.grid.columns) * 100}%;`
            )
          : ''
      }
    `;
  }}
`;
