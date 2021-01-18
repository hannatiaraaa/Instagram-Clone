import React from 'react';
import {View} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

// component
import Roboto from './Roboto';

// global formatting
import {Color} from '../Global/Config/Color';
import {Size} from '../Global/Config/Size';
import {Layouting} from '../Global/Style/Layout';

export const GrayDivider = ({
  title,
  color = Color.gray,
  fontSize = moderateVerticalScale(14),
  style,
}) => {
  return (
    <View style={[Layouting().flexRow, Layouting().centered, {...style}]}>
      <View
        backgroundColor={color}
        style={[
          Layouting().flex1,
          {height: moderateScale(1), margin: Size.ms12},
        ]}
      />
      <Roboto title={title} color={color} size={fontSize} type="Light" />
      <View
        backgroundColor={color}
        style={[
          Layouting().flex1,
          {height: moderateScale(1), margin: Size.ms12},
        ]}
      />
    </View>
  );
};
