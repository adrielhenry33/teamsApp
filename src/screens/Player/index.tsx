import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

import { Highlight } from '@components/Highlight/indext';
import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/InputText/indext';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { AppError } from '@utils/AppErro';

import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';


import { FlatList, Keyboard, TextInput } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';


type RouteParams ={
    group: string;
}

export function Players(){

    const [newPlayerName, setNewPlayerName] = useState('');
    const [team, setTeam] = useState('Time A');
    const [player, setPlayer] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute(); //acessa os parametro passados pela rota
                             //para o componente
    const {group} = route.params as RouteParams;

    const newPlayerNameInputRef = useRef<TextInput>(null)
    const navigation = useNavigation();

    async function handleAddPlayer(){
        if (newPlayerName.trim().length === 0) {
            return Alert.alert("Nova pessoa", "Informe o nome da pessoa para adicionar");
        } 
        const newPlayer = {
            name: newPlayerName,
            team
        }
        try {
            await playerAddByGroup(newPlayer, group);

            newPlayerNameInputRef.current?.blur();
            Keyboard.dismiss();
            setNewPlayerName('');
            fetchPlayersByTeam();

        } catch (error) {
            if(error instanceof AppError){
                Alert.alert("Nova Pessoa", error.message)
            } else {
                console.log(error);
                Alert.alert("Nova Pessoa", "Nao foi possivel adicionar");
            }
        }
    }
    
    async function handleGroupRemove(){
       Alert.alert(
        "Remover", 
        "Deseja remover A turma?", 
            [
                {text: 'Não', style: 'cancel' },
                {text: 'Sim', onPress: () => groupRemove()}
            ]
        );
    }
    async function groupRemove(){
        try {
            groupRemoveByName(group);
            navigation.navigate('groups');4
        } catch (error) {
            console.log(error);
            Alert.alert("Remover Grupo", "Nao foi possivel remover o grupo");
        }
    }

    
    async function handlePlayerRemove (playername: string){ 
            try {
                await playerRemoveByGroup(playername, group);
                fetchPlayersByTeam();

            } catch (error) {
                Alert.alert('Remover pessoa', 'Nao foi possivel remover a pessoa selecionada');
            }
    }


    async function fetchPlayersByTeam(){
        try {
           const playerByTeam =  await playerGetByGroupAndTeam(group, team);
           setPlayer(playerByTeam);
        } catch (error) {
            console.log(error);
            Alert.alert("Pessoas", "Nao foi possivel carregar as pessoas do time selecionadas");
        }
    }
    // 
    useEffect(()=> {
        // o que queremos executar
        fetchPlayersByTeam();
    }, [team]); // toda vez que o estado do team mudar ele ira carregar o fetch

    return (
        <Container>
            <Header showBackButton/>
            
            <Highlight 
                title = {group}
                subtitle= "Adicione a galera e separe os times."
            />
            
            <Form>
                <Input
                    inputRef = {newPlayerNameInputRef}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    placeholder="Nome do player"
                    autoCorrect ={false}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />
            
                <ButtonIcon 
                    icon= "add"
                    onPress={handleAddPlayer}
                />
            </Form>
            
            <HeaderList>
                <FlatList
                    data = {['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) =>(
                    
                    <Filter 
                        title={item}
                        isActive ={item === team}
                        onPress={() => setTeam(item)}
                    />
                    )}
                    horizontal
                />
                <NumberOfPlayers>
                    {player.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={player}
                keyExtractor={item => item.name}
                renderItem={({item}) =>(
                   <PlayerCard
                    name= { item.name }
                    onRemove={()=>handlePlayerRemove(item.name)}
                    /> 
                )}
                ListEmptyComponent={()=> (
                    <ListEmpty
                        message="Não há pessoas nesse time."
                    />
                )}
                showsVerticalScrollIndicator = {false}
                contentContainerStyle = {[
                    {paddingBottom: 100},
                    player.length === 0 && {flex:1}
                ]}
            />
            <Button
            title="Remover turma"        
            type="SECUNDARY"
            onPress={handleGroupRemove}
            />
        </Container>
    );
}