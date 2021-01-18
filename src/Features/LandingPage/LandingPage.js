import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';

// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// component
import {BlueButton} from '../../Shared/Component/BlueButton';
import {GrayDivider} from '../../Shared/Component/GrayDivider';
import Roboto from '../../Shared/Component/Roboto';

// global formatting
import {Size} from '../../Shared/Global/Config/Size';
import {Layouting} from '../../Shared/Global/Style/Layout';
import {Color} from '../../Shared/Global/Config/Color';

export default function LandingPage(props) {
  const actionSignUp = () => {
    props.navigation.navigate('Register');
  };

  const actionLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <SafeAreaView
      style={[Layouting().flex1, Layouting().spaceBetween, styles.container]}>
      <View style={[Layouting().flex1, Layouting().flexEnd]}>
        <FastImage
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <View style={[Layouting().flex1, Layouting().flexStart]}>
        <BlueButton
          title={
            <>
              <MaterialCommunityIcons
                name="facebook"
                size={moderateScale(14)}
              />{' '}
              Log In With Facebook
            </>
          }
        />
        <GrayDivider title="OR" style={styles.grayDivider} />
        <TouchableOpacity activeOpacity={0.8} onPress={actionSignUp}>
          <Roboto
            title="Sign Up with Email Address or Phone Number"
            size={Size.ms12}
            color={Color.blue}
            type="Bold"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Size.wp4,
  },
  logo: {
    width: moderateScale(200),
    height: moderateScale(200),
  },
  grayDivider: {
    marginTop: moderateScale(40),
    marginBottom: Size.ms12,
    width: Size.wp92,
  },
});
