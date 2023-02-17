import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';

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
    <Path
      d="M62.018 31.01c0 17.125-13.883 31.008-31.009 31.008S0 48.135 0 31.01 13.883 0 31.01 0c17.125 0 31.008 13.883 31.008 31.01Z"
      fill="#fff"
    />
    <G
      clipPath="url(#a)"
      stroke={props.isActive ? '#4A00FF' : '#A5A5A5'}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="m19 19 24 24" strokeWidth={2.33} />
      <Path
        d="M35 29.667v-1.334l6.07-3.034A1.333 1.333 0 0 1 43 26.49v9.018a1.333 1.333 0 0 1-.9 1.262M28.333 23h4A2.667 2.667 0 0 1 35 25.667v4M35 35v1.333A2.667 2.667 0 0 1 32.333 39H21.667A2.667 2.667 0 0 1 19 36.333V25.667A2.667 2.667 0 0 1 21.667 23H23"
        strokeWidth={1.5}
      />
      <G clipPath="url(#b)" strokeWidth={2.33}>
        <Path d="m35 28.333 6.07-3.034A1.333 1.333 0 0 1 43 26.49v9.018a1.333 1.333 0 0 1-1.93 1.192L35 33.667v-5.334ZM32.333 23H21.667A2.667 2.667 0 0 0 19 25.667v10.666A2.667 2.667 0 0 0 21.667 39h10.666A2.667 2.667 0 0 0 35 36.333V25.667A2.667 2.667 0 0 0 32.333 23Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(15 15)" d="M0 0h32v32H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" transform="translate(15 15)" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
