import Text from '../UI/Text';
import Grid, {GridCell} from '../Grid';

export default function SubHero() {
  return (
    <Grid>
      <GridCell xs={12} lg={4}></GridCell>
      <GridCell xs={12} lg={8}>
        <Text size="title2" element="h2" noMargin="top">
          My goal is to build digital products that impact people in a positive
          way and empower them to do more.
          <br />↳ Currently creating meaningful experiences at Airtame.
        </Text>
        <Text size="title2" element="h2" noMargin>
          Originally from Ushuaia, Argentina.
          <br />
          Figma & Notion fan, illustration & cooking lover.
        </Text>
      </GridCell>
    </Grid>
  );
}
