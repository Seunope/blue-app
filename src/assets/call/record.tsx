import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface Props {
  isActive: boolean;
}
const SvgComponent = (props: Props) => (
  <Svg
    width={63}
    height={63}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={31.009} cy={31.009} r={31.009} fill="#fff" />
    <Path
      d="M23.257 26.358a4.651 4.651 0 1 1 0 9.302 4.651 4.651 0 0 1 0-9.302ZM38.761 26.358a4.651 4.651 0 1 1 0 9.302 4.651 4.651 0 0 1 0-9.302ZM23.257 26.358h15.504"
      stroke={props.isActive ? '#4A00FF' : '#A5A5A5'}
      strokeWidth={2.326}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
