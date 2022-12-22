import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Auth from '../pages/Auth';

function StackRouter() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="Home"
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
