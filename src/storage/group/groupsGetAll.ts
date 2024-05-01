import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "./storageConfig";

export async function groupsGetAll(){
    try{
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION); // await - espere ate que a busca dos dados esteja pronta 
    
    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
    }catch (error){
        throw error;
    }
}