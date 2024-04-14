import { Container } from './styles';

import { Highlight } from '@components/Highlight/indext';
import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';


export function Players(){
    
    return (
        <Container>
            <Header showBackButton/>
            
            <Highlight 
                title = "Nome da turma "
                subtitle= "adicione a galera e separe os times"
            />

            <ButtonIcon/>
            

        </Container>
    );
}