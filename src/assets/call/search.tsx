import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

interface Props {
  //   isActive: boolean;
}
const SvgComponent = (props: Props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G
      clipPath="url(#a)"
      stroke="#927FF2"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM21 21l-6-6" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
