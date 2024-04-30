import { NavigationContainer } from '@react-navigation/native'
import { AppRouts } from './app.routes';

import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

export function Routes(){
    const { COLORS } = useTheme();
    
    return (
        //usando o core do react navigator para disponibilizar para
        // toda a aplicacao, esse container disponibiza para toda a aplicacao
        // os recursos do navigation do react 
        <View style ={{flex: 1, backgroundColor: COLORS.GRAY_600}}>
            <NavigationContainer> 
                <AppRouts/>
            </NavigationContainer>
        </View>
    );
}