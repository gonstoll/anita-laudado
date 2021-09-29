import Grid, {GridCell} from '../Grid';
import Text from '../UI/Text';
import Link from '../UI/Link';

export default function Hero() {
  return (
    <Grid>
      <GridCell xs={12} lg={8}>
        <Text size="title1" element="h1" noMargin bold>
          Hola! I'm Ana :) a Product Designer based in Copenhagen.
        </Text>
        <Text element="h2" noMargin="bottom">
          With a strong UI background, my goal is to build digital products that
          impact people in a positive way.
          <br />
          Originally from Ushuaia (Argentina), currently creating meaningful
          experiences at <Link href="https://airtame.com/">Airtame</Link>.
        </Text>
      </GridCell>
    </Grid>
  );
}
