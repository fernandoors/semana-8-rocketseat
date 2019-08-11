import React from 'react';
import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])
import Routes from './Routes/routes'
export const App = () => {
  return (
    <Routes />
  );
};

