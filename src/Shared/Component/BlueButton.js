import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';

// component
import Roboto from './Roboto';

// global formatting
import {Color} from '../Global/Config/Color';
import {Size} from '../Global/Config/Size';
import {Layouting} from '../Global/Style/Layout';

export const BlueButton = ({
  onPress,
  title,
  fontSize = Size.ms12,
  textColor = 'white',
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      style={[
        Layouting().centered,
        {
          width: Size.wp92,
          height: moderateScale(40),
          borderRadius: Size.radius,
          backgroundColor: disabled ? Color.lightblue : Color.blue,
          ...style,
        },
      ]}>
      <Roboto title={title} size={fontSize} color={textColor} type="Bold" />
    </TouchableOpacity>
  );
};
