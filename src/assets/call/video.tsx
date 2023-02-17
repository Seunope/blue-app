import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

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
    <G
      clipPath="url(#a)"
      stroke={props.isActive ? '#4A00FF' : '#A5A5A5'}
      strokeWidth={2.326}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="m35.66 27.909 7.06-3.53a1.55 1.55 0 0 1 2.243 1.387v10.487a1.551 1.551 0 0 1-2.243 1.386l-7.06-3.529V27.91Z" />
      <Path d="M32.56 21.707H20.156a3.1 3.1 0 0 0-3.1 3.1v12.404a3.1 3.1 0 0 0 3.1 3.101H32.56a3.101 3.101 0 0 0 3.1-3.1V24.807c0-1.713-1.388-3.101-3.1-3.101Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(12.404 12.404)"
          d="M0 0h37.211v37.211H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
