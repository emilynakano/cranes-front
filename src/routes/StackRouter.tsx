import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/index';
import Auth from '../pages/Auth/index';

function StackRouter() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="auth"
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
    </Navigator>
  );
}

export default StackRouter;
