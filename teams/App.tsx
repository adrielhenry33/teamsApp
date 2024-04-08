import Groups from '@screens/Groups';

import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme ={theme}>
      <Groups/>
    </ThemeProvider>
  );
}
