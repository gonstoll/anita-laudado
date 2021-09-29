import styled from 'styled-components';
import Text from '../UI/Text';
import Grid, {GridCell} from '../Grid';
import Link from '../UI/Link';
import List from '../UI/List';
import {ListItem} from '../UI/List/List';
import {links} from '../../definitions';
import {capitalizeString} from '../../utils/capitalizeString';

const Container = styled.div`
  border-top: 2px solid ${props => props.theme.colors.grey};
  padding-top: 1.25rem;
`;

const Wrapper = styled.footer`
  margin-top: ${({theme}) => theme.spacing.sm}rem;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Grid>
        {Object.entries(links).map(([title, config]) => (
          <GridCell key={title} xs={12} lg={4}>
            <Container>
              <Text size="body" element="h3" noMargin="top" color="grey" bold>
                {capitalizeString(title)}
              </Text>
              <List>
                {config.map(({text, link}, index) => (
                  <ListItem icon="↳" key={index}>
                    {link ? (
                      <Link href={link} color="grey">
                        {text}
                      </Link>
                    ) : (
                      <Text size="body" noMargin color="grey">
                        {text} <i>(coming soon)</i>
                      </Text>
                    )}
                  </ListItem>
                ))}
              </List>
            </Container>
          </GridCell>
        ))}
      </Grid>
    </Wrapper>
  );
}
