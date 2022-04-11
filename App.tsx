import React from 'react';
import {useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold} from '@expo-google-fonts/inter';
import {ThemeProvider } from 'styled-components';

import {Home} from './src/screens/Home';
import theme from './src/global/styles/theme';
// import AppLoading from 'expo-app-loading';
import {Routes} from './src/routes';
import {Load} from './src/components/Load';
 

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium, Inter_600SemiBold
  });

  // if(!fontsLoaded) {
  //   return <Load />
  // }

  return (
  <ThemeProvider theme={theme}>

    <Routes />
  </ThemeProvider>

  );
}


