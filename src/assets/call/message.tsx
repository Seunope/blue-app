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
    <Circle cx={31.587} cy={31.991} r={31.009} fill="#fff" />
    <G
      clipPath="url(#a)"
      stroke={props.isActive ? '#4A00FF' : '#A5A5A5'}
      strokeWidth={2.33}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="m17.651 45.008 2.016-6.046c-1.742-2.577-2.372-5.628-1.774-8.586.6-2.958 2.386-5.623 5.03-7.498 2.642-1.875 5.961-2.833 9.34-2.696 3.378.137 6.585 1.36 9.025 3.44 2.44 2.082 3.947 4.88 4.24 7.874.293 2.995-.647 5.982-2.645 8.407-2 2.425-4.92 4.122-8.22 4.776-3.301.654-6.757.22-9.725-1.221l-7.287 1.55M31.605 32.605v.016M25.403 32.605v.016M37.806 32.605v.016" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(13 14)"
          d="M0 0h37.21v37.21H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
