import { Container, Content, Icon } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight/indext';
import { Button } from '@components/Button';
import { Input } from '@components/InputText/indext';
import { groupCreate } from '@storage/group/groupCreat';
import { AppError } from '@utils/AppErro';


import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';


export function NewGroups(){
    //passando informacoes de uma tela para outra
    const [groupsname, setGroupName] = useState('');

    const navigator = useNavigation();

    async function handleNewPlayers(){
        

        
        try {
        if(groupsname.trim().length === 0){
            return Alert.alert("Novo grupo", "Informe o nome da turma");
        }

        //chamando a funcao de criacao de grupo e passando o nome do grupo
        await groupCreate(groupsname); 
        navigator.navigate("players", { group: groupsname });

        } catch (error) {
            if(error instanceof AppError){
                Alert.alert("Novo Grupo", error.message);
                console.log(error);
            } else{
                Alert.alert("Novo Grupo", "Nao foi possivel criar um novo grupo");
                console.log(error);
            }
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