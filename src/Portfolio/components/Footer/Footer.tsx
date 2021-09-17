import styled from 'styled-components';
import Text from '../UI/Text';
import Grid, {GridCell} from '../Grid';
import {links} from '../../definitions';

const Container = styled.div`
  border-top: 3px solid ${props => props.theme.colors.grey};
  padding-top: 1.25rem;
`;

export default function Footer() {
  return (
    <Grid>
      {Object.entries(links).map(([title, config]) => (
        <GridCell key={title} xs={12} lg={4}>
          <Container>
            <Text size="title3" element="h3" noMargin="top" color="grey">
              {title.toUpperCase()}
            </Text>
            {config.map(({text, link}, index) => (
              <Text key={index} size="body" element="p" noMargin>
                {text}
              </Text>
            ))}
          </Container>
        </GridCell>
      ))}
    </Grid>
  );
}
