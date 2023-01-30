import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/index';
import Auth from '../pages/Auth/index';
import Details from '../pages/Details';
import RouterLayout from './RouterLayout';
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';

function StackRouter() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="payment"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="home"
        component={() => RouterLayout(Home)}
      />
      <Screen
        name="auth"
        component={Auth}
      />
      <Screen
        name="details"
        component={() => RouterLayout(Details)}
      />
      <Screen
        name="cart"
        component={() => RouterLayout(Cart)}
      />
      <Screen
        name="payment"
        component={() => RouterLayout(Payment)}
      />
    </Navigator>
  );
}

export default StackRouter;
