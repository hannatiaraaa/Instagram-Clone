import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigations() {
  return (
    <Stack.Navigator>
      <Stack.Screen />
    </Stack.Navigator>
  );
}
