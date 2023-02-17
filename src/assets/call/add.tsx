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
    <Circle cx={31.963} cy={31.009} r={31.009} fill="#fff" />
    <Path
      d="M27.312 29.459a6.202 6.202 0 1 0 0-12.404 6.202 6.202 0 0 0 0 12.404ZM18.01 44.963v-3.1a6.202 6.202 0 0 1 6.201-6.203h6.202a6.202 6.202 0 0 1 6.202 6.202v3.101M42.816 24.807v9.303m-4.651-4.651h9.303-9.303Z"
      stroke={props.isActive ? '#4A00FF' : '#A5A5A5'}
      strokeWidth={2.326}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
