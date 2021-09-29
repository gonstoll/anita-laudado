import Text from '../UI/Text';
import Grid, {GridCell} from '../Grid';

export default function SubHero() {
  return (
    <Grid>
      <GridCell xs={12} lg={8}>
        <Text size="title2" element="h2" noMargin="top">
          Originally from Ushuaia (Argentina), my goal is to build digital
          products that impact people in a positive way.
          <br />↳ Currently creating meaningful experiences at Airtame.
        </Text>
      </GridCell>
    </Grid>
  );
}
