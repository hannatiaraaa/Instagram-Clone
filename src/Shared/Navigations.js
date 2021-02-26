import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// router
import LandingPage from '../Features/LandingPage/LandingPage';
import Register from '../Features/Register/Register';
import Login from '../Features/Login/Login';

// component
import Footer from './Component/Footer/AuthenticationFooter';
import Home from '../Features/Home/Home';

const Stack = createStackNavigator();

const Authentication = ({navigation, route}) => {
  const routeScreen = route.params.screen;
  const [Router, setRouter] = useState(routeScreen);
  const actionChangeRoute = () => {
    if (Router === 'Register') {
      navigation.navigate('Login');
      setRouter('Login');
    }

    if (Router === 'Login') {
      navigation.navigate('Register');
      setRouter('Register');
    }
  };

  return (
    <>
      <Stack.Navigator
        initialRouteName={routeScreen === 'Register' ? 'Register' : 'Login'}>
        <Stack.Screen
          name="Log in"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>

      <Footer
        onPress={actionChangeRoute}
        text={
          Router === 'Register'
            ? 'Already have an account?'
            : "Don't have an account?"
        }
        touchableText={Router === 'Register' ? '  Log in' : '  Sign up'}
      />
    </>
  );
};

export default function Navigations() {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={Authentication}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
