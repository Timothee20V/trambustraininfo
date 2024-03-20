import * as React from 'react';
import {AppRegistry} from 'react-native';
import {configureFonts, PaperProvider, useTheme} from 'react-native-paper';
import app from './app.json';
import Home from './src/page/Home';
import Banner from './src/components/Banner/Banner';
import {colors, fontConfig} from './src/theme/theme';
import {useFonts} from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Slab': require('./assets/fonts/RobotoSlab-Regular.ttf'),
    'Rounded-Mplus-1c-Bold': require('./assets/fonts/MPLUSRounded1c-Bold.ttf'),
  });
  const fonts = configureFonts({
    config: {
      ...fontConfig,
    },
  });

  const theme = useTheme();

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={{...theme, fonts, colors}}>
      <Banner/>
      <Home/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(app.expo.name, () => App);