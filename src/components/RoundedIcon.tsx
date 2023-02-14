import React, {ReactNode} from 'react';
import {Box, Text, Theme, Icon} from 'native-base';

export interface RoundedIconProps {
  name?: string | any;
  size?: number;
  color?: keyof Theme['colors'];
  backgroundColor?: string;
  iconRatio?: number;
  align?: 'flex-start' | 'center' | 'flex-end';
  children?: ReactNode;
}

const RoundedIcon = ({
  name,
  size,
  color,
  iconRatio,
  backgroundColor,
  align,
  children,
}: RoundedIconProps): JSX.Element => {
  // const iconSize = size * 0.7
  const iconSize = iconRatio * size;
  return (
    <Box
      height={size}
      width={size}
      style={{borderRadius: size / 2}}
      justifyContent="center"
      alignItems={align}
      {...{backgroundColor}}>
      <Text
        {...{color}}
        style={{width: iconSize, height: iconSize, textAlign: 'center'}}>
        {children}
        <Icon size={iconSize} {...{name}} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
  align: 'center',
  backgroundColor: 'white',
};

export default RoundedIcon;
