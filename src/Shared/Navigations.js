import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../Features/LandingPage/LandingPage';
import Register from '../Features/Register/Register';
import Login from '../Features/Login/Login';

const Stack = createStackNavigator();

export default function Navigations() {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
