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
    <Circle cx={31.587} cy={31.009} r={31.009} fill="#fff" />
    <G
      clipPath="url(#a)"
      stroke={props.isActive ? '#4A00FF' : '#A5A5A5'}
      strokeWidth={2.326}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="m17.633 17.055 27.908 27.908M26.936 20.156a4.651 4.651 0 1 1 9.303 0v7.752c0 .46-.068.916-.202 1.355m-3.1 3.101a4.65 4.65 0 0 1-6.001-4.453v-1.55" />
      <Path d="M20.734 27.908a10.854 10.854 0 0 0 16.816 9.07m3.104-3.1a10.802 10.802 0 0 0 1.786-5.97M25.385 44.963H37.79M31.587 38.761v6.202" />
      <Path d="M36.239 20.156a4.651 4.651 0 1 0-9.303 0v7.752a4.651 4.651 0 1 0 9.303 0v-7.752Z" />
      <Path d="M20.734 27.908a10.853 10.853 0 0 0 21.706 0M25.385 44.963H37.79M31.587 38.761v6.202" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(12.982 12.404)"
          d="M0 0h37.211v37.211H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
