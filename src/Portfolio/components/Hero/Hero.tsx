import Grid, {GridCell} from '../Grid';
import Text from '../UI/Text';
import Link from '../UI/Link';

export default function Hero() {
  return (
    <Grid>
      <GridCell xs={12} lg={8}>
        <Text size="title1" element="h1" noMargin bold>
          Hola! I'm Ana,
          <br />a Product Designer
          <br />
          based in Copenhagen.
        </Text>
        <Text size="title2" element="h2" noMargin="bottom">
          With a strong UI background & passionate about Design Systems. My goal
          is to build digital products that impact people in a positive way.
        </Text>
        <Text size="title2" element="h2" noMargin>
          Originally from Ushuaia 🇦🇷, currently creating meaningful experiences
          at <Link href="https://airtame.com/">Airtame</Link>.
        </Text>
      </GridCell>
    </Grid>
  );
}