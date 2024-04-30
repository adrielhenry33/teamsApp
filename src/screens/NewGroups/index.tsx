import { Container, Content, Icon } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight/indext';
import { Button } from '@components/Button';
import { Input } from '@components/InputText/indext';

import { useNavigation } from '@react-navigation/native';


export function NewGroups(){
    
    const navigator = useNavigation();

    function handleNewPlayers(){
        navigator.navigate("players", {group: 'Sao Paulo'});
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