import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/index';
import Auth from '../pages/Auth/index';

function StackRouter() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Auth"
        component={Auth}
      />
    </Navigator>
  );
}

export default StackRouter;
