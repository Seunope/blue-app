import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackIcon = (props: SvgProps) => (
  <Svg
    width={8}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7 1 1 7l6 6"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackIcon;
