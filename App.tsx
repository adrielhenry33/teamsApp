

import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';


import theme from './src/theme';

import  { Loading }  from '@components/Loading/index';
import {Players} from '@screens/Player';
import { NewGroups } from '@screens/NewGroups';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme ={theme}>
      <StatusBar
        barStyle = 'light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <NewGroups/> : <Loading/>}
    </ThemeProvider>
  );
}
