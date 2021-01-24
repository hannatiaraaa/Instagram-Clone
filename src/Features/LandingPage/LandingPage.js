import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

// icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// component
import Roboto from '../../Shared/Component/Roboto';
import {BlueButton} from '../../Shared/Component/BlueButton';
import {GrayDivider} from '../../Shared/Component/GrayDivider';
import Footer from '../../Shared/Component/Footer/AuthenticationFooter';

// global formatting
import {Size} from '../../Shared/Global/Config/Size';
import {Layouting} from '../../Shared/Global/Style/Layout';
import {Color} from '../../Shared/Global/Config/Color';

export default function LandingPage(props) {
  const actionSignUp = () => {
    props.navigation.push('Auth', {screen: 'Register'});
  };

  const actionLogin = () => {
    props.navigation.push('Auth', {screen: 'Login'});
  };

  return (
    <SafeAreaView
      style={[Layouting().flex1, Layouting().spaceBetween, styles.container]}>
      <View style={[Layouting().centered, styles.logoContainer]}>
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
          fontSize={moderateScale(13)}
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

      <Footer
        onPress={actionLogin}
        text="Already have an account?"
        touchableText="  Log in"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Size.wp4,
  },
  logoContainer: {
    flex: 2,
  },
  logo: {
    width: moderateScale(150),
    height: moderateScale(150),
  },
  grayDivider: {
    marginTop: moderateScale(40),
    marginBottom: Size.ms12,
    width: Size.wp92,
  },
});
