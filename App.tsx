import React from 'react';
import { useFonts } from 'expo-font';
import Route from './src/routes';
import {
  RobotoBlack, RobotoBold, RobotoMedium, RobotoRegular,
} from './assets/fonts';

function App() {
  const [loaded] = useFonts({
    RobotoBlack,
    RobotoBold,
    RobotoMedium,
    RobotoRegular,
  });

  if (!loaded) return null;
  return (
    <Route />
  );
}

export default App;
