import * as React from "react"
import Svg, { Path, Mask } from "react-native-svg"


const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.296 22H12.2a10.266 10.266 0 0 1-7.344-3.154C1.179 15.041 1.064 8.744 4.599 4.81a10.23 10.23 0 0 1 3.993-2.743.994.994 0 0 1 1.059.222c.28.275.373.688.238 1.056a8.397 8.397 0 0 0 1.94 8.804c2.298 2.293 5.764 3.054 8.829 1.938a.998.998 0 0 1 1.276 1.298 10.225 10.225 0 0 1-2.336 3.596A10.261 10.261 0 0 1 12.296 22Z"
      fill="#ECECEC"
    />
    <Mask
      id="a"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={1}
      width={21}
      height={21}
    >
      <Path
        d="M12.296 22H12.2a10.266 10.266 0 0 1-7.344-3.154C1.179 15.041 1.064 8.744 4.599 4.81a10.23 10.23 0 0 1 3.993-2.743.994.994 0 0 1 1.059.222c.28.275.373.688.238 1.056a8.397 8.397 0 0 0 1.94 8.804c2.298 2.293 5.764 3.054 8.829 1.938a.998.998 0 0 1 1.276 1.298 10.225 10.225 0 0 1-2.336 3.596A10.261 10.261 0 0 1 12.296 22Z"
        fill="#fff"
      />
    </Mask>
  </Svg>
)

export default SvgComponent
