import React from 'react';
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
