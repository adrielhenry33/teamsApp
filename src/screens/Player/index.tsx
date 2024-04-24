import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

import { Highlight } from '@components/Highlight/indext';
import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/InputText/indext';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';


import { FlatList } from 'react-native';
import { useState } from 'react';


export function Players(){

    const [team, setTeam] = useState('Time A');
    const [player, setPlayer] = useState(['Adriel', 'Sarah']);
    return (
        <Container>
            <Header showBackButton/>
            
            <Highlight 
                title = "Nome da turma "
                subtitle= "adicione a galera e separe os times"
            />
            
            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect ={false}
                />
            
                <ButtonIcon icon= "add"/>
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