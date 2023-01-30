import React from 'react';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { dark } from './src/theme';
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
    <ThemeProvider theme={dark}>
      <StatusBar />
      <Route />
    </ThemeProvider>
  );
}

export default App;
