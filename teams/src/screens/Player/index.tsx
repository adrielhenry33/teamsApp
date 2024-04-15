import { Container, Form } from './styles';

import { Highlight } from '@components/Highlight/indext';
import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/InputText/indext';

import { useTheme } from 'styled-components';
import { Filter } from '@components/Filter';

export function Players(){
    const {COLORS} = useTheme();

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

            <Filter title="Time A" />

        </Container>
    );
}