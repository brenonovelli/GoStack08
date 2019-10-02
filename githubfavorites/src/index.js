import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

YellowBox.ignoreWarnings([
  // 'Warning: Async Storage has been extracted',
  'RCTRootView cancelTouches', // https://github.com/kmagiera/react-native-gesture-handler/issues/746
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#230187" />
      <Routes />
    </>
  );
}
