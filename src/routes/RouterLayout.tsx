import { View } from 'react-native';
import React from 'react';
import { Header } from '../components';
import Home from '../pages/Home';
import BottomBar from '../components/BottomBar';

function RouterLayout(Children: any) {
  return (
    <>
      <Children />
      <BottomBar />
    </>
  );
}

export default RouterLayout;
