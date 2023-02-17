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
    <Circle cx={31.009} cy={31.009} r={31.009} fill="#F70032" />
    <G clipPath="url(#a)">
      <Path
        d="m47.038 32.254-4.437 4.333-7.635-3.38 1.148-4.373a17.055 17.055 0 0 0-10.962-.13l1.044 4.398-7.713 3.198-4.333-4.438a3.101 3.101 0 0 1 .052-4.385 24.807 24.807 0 0 1 32.888.392 3.1 3.1 0 0 1-.052 4.385"
        stroke="#fff"
        strokeWidth={2.326}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="rotate(135.682 22.09 27.228)"
          d="M0 0h37.211v37.211H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
