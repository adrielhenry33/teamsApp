import { Container, Content, Icon } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight/indext';
import { Button } from '@components/Button';
import { Input } from '@components/InputText/indext';


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

                <Input/>
                <Button
                    title="Criar"
                    style ={ {marginTop: 20} }
                />
            </Content>

        </Container>
    );
}