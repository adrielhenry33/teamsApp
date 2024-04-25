import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '@screens/Groups';
import { Players } from '@screens/Player';
import { NewGroups } from '@screens/NewGroups';

//const NativeStack = createNativeStackNavigator(); um jeito de usar as propriedades 


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouts(){
    return (
        <Navigator>
            <Screen
                name = "groups" // como se fosse o apelido da tela 
                component={Groups} // chamada do componente Groups
            />  
            
            <Screen
                name = "players" // como se fosse o apelido da tela 
                component={Players} // chamada do componente Groups
            />  
            
            <Screen
                name = "newGroup" // como se fosse o apelido da tela 
                component={NewGroups} // chamada do componente Groups
            />  


         
        </Navigator>
    );
}

