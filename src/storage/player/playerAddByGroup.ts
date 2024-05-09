import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppErro";

import { PLAYER_COLLECTION } from "@storage/group/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playerGetByGroup";

export async function playerAddByGroup (newPlayer: PlayerStorageDTO, group: string){
    try {
        const storedPlayers = await playersGetByGroup(group);

        const playerAlreadyExist = storedPlayers?.filter(player => player.name === newPlayer.name);

        if(playerAlreadyExist.length > 0){
            throw new AppError ('Essa pessoa ja esta adicionada em um time aqui');
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer ]);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
        
    } catch (error) {
        throw(error);
    }
}