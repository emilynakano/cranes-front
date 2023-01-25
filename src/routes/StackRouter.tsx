import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/index';
import Auth from '../pages/Auth/index';
import Details from '../pages/Details';

function StackRouter() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="auth"
        component={Auth}
      />
      <Screen
        name="details"
        component={Details}
      />
    </Navigator>
  );
}

export default StackRouter;
