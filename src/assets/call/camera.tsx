import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface Props {
  //isActive: boolean;
}
const SvgComponent = (props: Props) => (
  <Svg
    width={63}
    height={63}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={31.009}
      cy={31.009}
      r={31.009}
      fill="#BABABA"
      fillOpacity={0.5}
    />
    <Path
      d="M21.667 24.334H23a2.667 2.667 0 0 0 2.667-2.667A1.333 1.333 0 0 1 27 20.333h8a1.333 1.333 0 0 1 1.333 1.334A2.666 2.666 0 0 0 39 24.333h1.333A2.667 2.667 0 0 1 43 27v12a2.667 2.667 0 0 1-2.667 2.667H21.667A2.667 2.667 0 0 1 19 39V27a2.667 2.667 0 0 1 2.667-2.666"
      stroke="#fff"
      strokeWidth={2.33}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M29.993 36.205A4 4 0 0 0 35 32.333m-3-3.873a4 4 0 0 0-5 3.873"
      stroke="#fff"
      strokeWidth={2.33}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M33.666 32.334h2.667V35M28.333 32.333h-2.666v-2.666"
      stroke="#fff"
      strokeWidth={2.33}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
