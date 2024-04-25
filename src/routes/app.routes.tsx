import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '@screens/Groups';
import { Players } from '@screens/Player';
import { NewGroups } from '@screens/NewGroups';

//const NativeStack = createNativeStackNavigator(); um jeito de usar as propriedades 


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouts(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name = "groups" // como se fosse o apelido da tela 
                component={Groups} // chamada do componente Groups
            />  
        
            <Screen
                name = "new" // como se fosse o apelido da tela 
                component={NewGroups} // chamada do componente NewGroups
            />  

            <Screen
                name = "players" // como se fosse o apelido da tela 
                component={Players} // chamada do componente Players
            />  
         
        </Navigator>
    );
}


