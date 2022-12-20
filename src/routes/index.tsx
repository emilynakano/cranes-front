import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRouter from './StackRouter';

export default function App() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}