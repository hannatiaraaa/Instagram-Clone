import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

// component
import Roboto from '../Roboto';

// global formatting
import {Color} from '../../Global/Config/Color';
import {Layouting} from '../../Global/Style/Layout';

export default function Footer({text, onPress, touchableText}) {
  return (
    <View style={[Layouting().flexRow, Layouting().centered, styles.footer]}>
      <Roboto title={text} color={Color.gray} size={moderateScale(10)} />
      <View>
        <TouchableWithoutFeedback onPress={onPress}>
          <Roboto
            title={touchableText}
            size={moderateScale(10)}
            type="Medium"
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderWidth: 0.8,
    borderColor: Color.lightgray,
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(6),
  },
});
