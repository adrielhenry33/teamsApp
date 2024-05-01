import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "./storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate (newGroup: string) {
    try{
        //armazenando na variavel todos os grupos que ja estao salvos
        const storedGroups = await groupsGetAll();
        
        //transformando em string ja que o groupsGetAll retorna um objeto
        //pegando tudo que esta na string e o novo grupo e adicionando em storage
        const storage = JSON.stringify([...storedGroups, newGroup]);

        //setando no armazenamento o storage passando a chave de referencia
        await AsyncStorage.setItem(GROUP_COLLECTION, storage); //chave unica e o valor
    }catch(error){
        throw error;
    }
}