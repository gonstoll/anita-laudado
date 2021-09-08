import {Theme} from 'styled-components';
import Text from './components/UI/Text';

interface Props {
  changeTheme: (theme?: Theme) => void;
}

export default function Portfolio({changeTheme}: Props) {
  return (
    <>
      <button onClick={() => changeTheme()}>Change theme</button>
      <Text size="title1" element="h1">
        Hi :) I’m Ana, a Product Designer driven & inspired by people.
        <br />↳ Based in Copenhagen.
      </Text>
    </>
  );
}
