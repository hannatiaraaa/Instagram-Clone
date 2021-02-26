import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

// global
import {Color} from '../Global/Config/Color';
import {Size} from '../Global/Config/Size';

export const AuthenticationInput = ({
  autoCapitalize,
  placeholder,
  onChangeText,
  secureTextEntry = false,
  errorMessage,
}) => {
  const [focused, setFocused] = useState(true);

  useEffect(() => {
    handleFocus();
    handleBlur();
  }, []);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <Input
      onFocus={handleFocus}
      onBlur={handleBlur}
      autoCapitalize={autoCapitalize}
      placeholder={placeholder}
      placeholderTextColor={Color.gray}
      onChangeText={onChangeText}
      errorStyle={styles.textError}
      errorMessage={focused ? errorMessage : null}
      secureTextEntry={secureTextEntry}
      inputContainerStyle={styles.box}
      inputStyle={styles.textInput}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: 'black',
    fontSize: moderateScale(14),
    fontFamily: 'Roboto-Regular',
  },
  textError: {
    color: 'red',
  },
  box: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(4),
    paddingHorizontal: Size.wp4,
    width: widthPercentageToDP(88),
    backgroundColor: '#FAFAFA',
    borderColor: Color.gray,
  },
});
