import { Container, Content, Icon } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight/indext';
import { Button } from '@components/Button';


export function NewGroup(){
    return(
        <Container>
            <Header showBackButton/>
            
            <Content>
                <Icon/>
                <Highlight
                    title="Nova Turma"
                    subtitle= "Crie uma nova turma para adicionar as pessoas"
                />
                <Button
                    title="Criar"
                />
            </Content>

        </Container>
    );
}