import { Container, Content, Icon } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight/indext';
import { Button } from '@components/Button';
import { Input } from '@components/InputText/indext';
import { groupCreate } from '@storage/group/groupCreat';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


export function NewGroups(){
    //passando informacoes de uma tela para outra
    const [groupsname, setGroupName] = useState('');

    const navigator = useNavigation();

    async function handleNewPlayers(){
       try {
        await groupCreate(groupsname);
        navigator.navigate("players", { group: groupsname });
       } catch (error) {
        console.log(error);
       }
    }
    
    return(
        <Container>
            <Header showBackButton/>
            
            <Content>
                <Icon/>
                <Highlight
                    title="Nova Turma"
                    subtitle= "Crie uma nova turma para adicionar as pessoas"
                />

                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroupName}
                />
                <Button
                    title="Criar"
                    style ={ {marginTop: 20} }
                    onPress={handleNewPlayers}
                />
            </Content>

        </Container>
    );
}