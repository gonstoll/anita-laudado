import styled from 'styled-components';

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const StyledListItem = styled.div<{hasIcon?: boolean}>`
  display: flex;
  align-items: center;
  ${({hasIcon}) => hasIcon && 'gap: 5px'};
`;