import { NavigationContainer } from '@react-navigation/native'
import { AppRouts } from './app.routes';

export function Routes(){
    return (
        //usando o core do react navigator para disponibilizar para
        // toda a aplicacao, esse container disponibiza para toda a aplicacao
        // os recursos do navigation do react 
        <NavigationContainer> 
            <AppRouts/>
        </NavigationContainer>
    );
}