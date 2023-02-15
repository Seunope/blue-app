import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

interface Props {
  type?: string;
}
const SvgComponent = (props: Props) =>
  props.type !== 'small' ? (
    <Svg
      width={70}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect y={10.85} width={1.55} height={9.3} rx={0.775} fill="#fff" />
      <Rect x={6.2} y={9.3} width={1.55} height={12.4} rx={0.775} fill="#fff" />
      <Rect
        x={12.4}
        y={11.625}
        width={1.55}
        height={7.75}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={34.1}
        y={3.1}
        width={1.55}
        height={24.8}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={55.8}
        y={13.95}
        width={1.55}
        height={3.1}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={24.8}
        y={9.3}
        width={1.55}
        height={12.4}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={46.5}
        y={9.3}
        width={1.55}
        height={12.4}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={68.2}
        y={6.975}
        width={1.55}
        height={17.05}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={80.6}
        y={11.625}
        width={1.55}
        height={7.75}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={93}
        y={11.625}
        width={1.55}
        height={7.75}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={105.4}
        y={12.4}
        width={1.55}
        height={6.2}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={117.8}
        y={12.4}
        width={1.55}
        height={6.2}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={120.9}
        y={14.725}
        width={1.55}
        height={1.55}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={18.6}
        y={9.3}
        width={1.55}
        height={12.4}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={40.3}
        y={9.3}
        width={1.55}
        height={12.4}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={62}
        y={13.175}
        width={1.55}
        height={4.65}
        rx={0.775}
        fill="#fff"
      />
      <Rect x={31} y={9.3} width={1.55} height={12.4} rx={0.775} fill="#fff" />
      <Rect
        x={52.7}
        y={9.3}
        width={1.55}
        height={12.4}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={74.4}
        y={3.875}
        width={1.55}
        height={23.25}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={86.8}
        y={9.3}
        width={1.55}
        height={12.4}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={99.2}
        y={9.3}
        width={1.55}
        height={12.4}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={111.6}
        y={11.625}
        width={1.55}
        height={7.75}
        rx={0.775}
        fill="#fff"
      />
      <Rect x={3.1} y={6.2} width={1.55} height={18.6} rx={0.775} fill="#fff" />
      <Rect
        x={9.3}
        y={2.325}
        width={1.55}
        height={26.35}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={21.7}
        y={6.2}
        width={1.55}
        height={18.6}
        rx={0.775}
        fill="#fff"
      />
      <Rect x={43.4} width={1.55} height={31} rx={0.775} fill="#fff" />
      <Rect
        x={65.1}
        y={10.075}
        width={1.55}
        height={10.85}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={77.5}
        y={6.2}
        width={1.55}
        height={18.6}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={89.9}
        y={1.55}
        width={1.55}
        height={27.9}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={102.3}
        y={4.65}
        width={1.55}
        height={21.7}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={114.7}
        y={9.3}
        width={1.55}
        height={12.4}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={15.5}
        y={14.725}
        width={1.55}
        height={1.55}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={37.2}
        y={6.2}
        width={1.55}
        height={18.6}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={58.9}
        y={14.725}
        width={1.55}
        height={1.55}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={27.9}
        y={11.625}
        width={1.55}
        height={7.75}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={49.6}
        y={6.2}
        width={1.55}
        height={18.6}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={71.3}
        y={10.075}
        width={1.55}
        height={10.85}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={83.7}
        y={6.2}
        width={1.55}
        height={18.6}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={96.1}
        y={6.2}
        width={1.55}
        height={18.6}
        rx={0.775}
        fill="#fff"
      />
      <Rect
        x={108.5}
        y={9.3}
        width={1.55}
        height={12.4}
        rx={0.775}
        fill="#fff"
      />
    </Svg>
  ) : (
    <Svg
      width={64}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect y={5.6} width={0.8} height={4.8} rx={0.4} fill="#fff" />
      <Rect x={3.2} y={4.8} width={0.8} height={6.4} rx={0.4} fill="#fff" />
      <Rect x={6.4} y={6} width={0.8} height={4} rx={0.4} fill="#fff" />
      <Rect x={17.6} y={1.6} width={0.8} height={12.8} rx={0.4} fill="#fff" />
      <Rect x={28.8} y={7.2} width={0.8} height={1.6} rx={0.4} fill="#fff" />
      <Rect x={12.8} y={4.8} width={0.8} height={6.4} rx={0.4} fill="#fff" />
      <Rect x={24} y={4.8} width={0.8} height={6.4} rx={0.4} fill="#fff" />
      <Rect x={35.2} y={3.6} width={0.8} height={8.8} rx={0.4} fill="#fff" />
      <Rect x={41.6} y={6} width={0.8} height={4} rx={0.4} fill="#fff" />
      <Rect x={48} y={6} width={0.8} height={4} rx={0.4} fill="#fff" />
      <Rect x={54.4} y={6.4} width={0.8} height={3.2} rx={0.4} fill="#fff" />
      <Rect x={60.8} y={6.4} width={0.8} height={3.2} rx={0.4} fill="#fff" />
      <Rect x={62.4} y={7.6} width={0.8} height={0.8} rx={0.4} fill="#fff" />
      <Rect x={9.6} y={4.8} width={0.8} height={6.4} rx={0.4} fill="#fff" />
      <Rect x={20.8} y={4.8} width={0.8} height={6.4} rx={0.4} fill="#fff" />
      <Rect x={32} y={6.8} width={0.8} height={2.4} rx={0.4} fill="#fff" />
      <Rect x={16} y={4.8} width={0.8} height={6.4} rx={0.4} fill="#fff" />
      <Rect x={27.2} y={4.8} width={0.8} height={6.4} rx={0.4} fill="#fff" />
      <Rect x={38.4} y={2} width={0.8} height={12} rx={0.4} fill="#fff" />
      <Rect x={44.8} y={4.8} width={0.8} height={6.4} rx={0.4} fill="#fff" />
      <Rect x={51.2} y={4.8} width={0.8} height={6.4} rx={0.4} fill="#fff" />
      <Rect x={57.6} y={6} width={0.8} height={4} rx={0.4} fill="#fff" />
      <Rect x={1.6} y={3.2} width={0.8} height={9.6} rx={0.4} fill="#fff" />
      <Rect x={4.8} y={1.2} width={0.8} height={13.6} rx={0.4} fill="#fff" />
      <Rect x={11.2} y={3.2} width={0.8} height={9.6} rx={0.4} fill="#fff" />
      <Rect x={22.4} width={0.8} height={16} rx={0.4} fill="#fff" />
      <Rect x={33.6} y={5.2} width={0.8} height={5.6} rx={0.4} fill="#fff" />
      <Rect x={40} y={3.2} width={0.8} height={9.6} rx={0.4} fill="#fff" />
      <Rect x={46.4} y={0.8} width={0.8} height={14.4} rx={0.4} fill="#fff" />
      <Rect x={52.8} y={2.4} width={0.8} height={11.2} rx={0.4} fill="#fff" />
      <Rect x={59.2} y={4.8} width={0.8} height={6.4} rx={0.4} fill="#fff" />
      <Rect x={8} y={7.6} width={0.8} height={0.8} rx={0.4} fill="#fff" />
      <Rect x={19.2} y={3.2} width={0.8} height={9.6} rx={0.4} fill="#fff" />
      <Rect x={30.4} y={7.6} width={0.8} height={0.8} rx={0.4} fill="#fff" />
      <Rect x={14.4} y={6} width={0.8} height={4} rx={0.4} fill="#fff" />
      <Rect x={25.6} y={3.2} width={0.8} height={9.6} rx={0.4} fill="#fff" />
      <Rect x={36.8} y={5.2} width={0.8} height={5.6} rx={0.4} fill="#fff" />
      <Rect x={43.2} y={3.2} width={0.8} height={9.6} rx={0.4} fill="#fff" />
      <Rect x={49.6} y={3.2} width={0.8} height={9.6} rx={0.4} fill="#fff" />
      <Rect x={56} y={4.8} width={0.8} height={6.4} rx={0.4} fill="#fff" />
    </Svg>
  );

export default SvgComponent;
