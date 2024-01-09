import * as React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import app from './app.json';
import Home from './src/Home';

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(app.expo.name, () => App);