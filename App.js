import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from './src/Shared/Navigations';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  );
}
