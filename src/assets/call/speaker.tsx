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
    <Circle cx={31.009} cy={31.991} r={31.009} fill="#fff" />
    <G
      clipPath="url(#a)"
      stroke={props.isActive ? '#4A00FF' : '#A5A5A5'}
      strokeWidth={2.326}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M35.66 25.79a7.752 7.752 0 0 1 0 12.403M21.706 36.643h-3.1a1.55 1.55 0 0 1-1.55-1.55V28.89a1.55 1.55 0 0 1 1.55-1.55h3.1l5.427-6.977a1.24 1.24 0 0 1 2.326.775v21.706a1.24 1.24 0 0 1-2.326.776l-5.427-6.977Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(12.404 13.385)"
          d="M0 0h37.211v37.211H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
