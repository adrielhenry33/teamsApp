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

import { FlatList } from 'react-native';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
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
            
        } catch (error) {
            if(error instanceof AppError){
                Alert.alert("Nova Pessoa", error.message)
            } else {
                console.log(error);
                Alert.alert("Nova Pessoa", "Nao foi possivel adicionar");
            }
        }
    }

    async function fetchPlayersByTeam(){
        try {
           const playerByTeam =  await playerGetByGroupAndTeam(group, team);
           setPlayer(playerByTeam);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Header showBackButton/>
            
            <Highlight 
                title = {group}
                subtitle= "Adicione a galera e separe os times."
            />
            
            <Form>
                <Input
                    onChangeText={setNewPlayerName}
                    placeholder="Nome do player"
                    autoCorrect ={false}
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
                keyExtractor={item => item}
                renderItem={({item}) =>(
                   <PlayerCard
                    name= { item }
                    onRemove={()=>{}}
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
        />
        </Container>
    );
}