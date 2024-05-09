import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppErro";

import { PLAYER_COLLECTION } from "@storage/group/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playerGetByGroup";

export async function playerAddByGroup (newPlayer: PlayerStorageDTO, group: string){
    try {
        const storedPlayers = await playersGetByGroup(group);

        const playerAlreadyExist = storedPlayers?.filter(player => player.name === newPlayer.name);

        
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, `${playersGetByGroup}`);
    } catch (error) {
        throw(error);
    }
}