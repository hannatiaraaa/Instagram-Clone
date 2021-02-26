import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, View, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

// component
import {AuthenticationInput} from '../../Shared/Component/AuthenticationInput';
import {BlueButton} from '../../Shared/Component/BlueButton';
import {GrayDivider} from '../../Shared/Component/GrayDivider';
import Roboto from '../../Shared/Component/Roboto';

// global
import {Layouting} from '../../Shared/Global/Style/Layout';
import {Color} from '../../Shared/Global/Config/Color';

// icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Size} from '../../Shared/Global/Config/Size';

export default function Login(props) {
  const {navigation} = props;
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (text) => {
    setEmail(text);
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email && regex.test(text)) {
      setEmailError(null);
      if (email && password) {
        setDisabled(false);
      }
    } else {
      setDisabled(true);
      setEmailError('Please enter a valid email address');
    }
  };

  const validatePassword = (text) => {
    setPassword(text);
    if (password.length >= 5) {
      setPasswordError(null);
      if (email && password) {
        setDisabled(false);
      }
    } else {
      setDisabled(true);
      setPasswordError('Password length must be at least 6 characters long');
    }
  };

  return (
    <SafeAreaView style={[Layouting().flex1, Layouting().flexEnd]}>
      <ScrollView
        contentContainerStyle={[Layouting().flex1, Layouting().centered]}>
        <FastImage
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <AuthenticationInput
          placeholder="Email address"
          autoCapitalize="none"
          onChangeText={(text) => {
            validateEmail(text);
          }}
          errorMessage={emailError}
        />
        <AuthenticationInput
          placeholder="Password"
          onChangeText={(text) => {
            validatePassword(text);
          }}
          errorMessage={passwordError}
          secureTextEntry={true}
        />
        <BlueButton
          title="Log In"
          fontSize={moderateScale(14)}
          width={widthPercentageToDP(88)}
          disabled={disabled}
          onPress={() => navigation.navigate('Home')}
        />
        <View style={styles.content}>
          <Roboto
            title={
              <>
                <Roboto
                  title="Forgotten your login detals?"
                  color={Color.gray}
                />{' '}
                <Roboto title="Get help with logging in." type="Bold" />
              </>
            }
            size={Size.ms12}
            style={styles.content}
          />
        </View>
        <GrayDivider title="OR" />
        <View
          style={[Layouting().flexRow, Layouting().centered, styles.content]}>
          <MaterialCommunityIcons
            name="facebook"
            size={moderateScale(24)}
            color={Color.blue}
          />
          <Roboto
            title=" Log In With Facebook"
            size={moderateScale(14)}
            color={Color.blue}
            type="Bold"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: moderateScale(150),
    height: moderateScale(80),
  },
  content: {
    paddingTop: heightPercentageToDP(2),
    paddingBottom: heightPercentageToDP(1),
  },
});
