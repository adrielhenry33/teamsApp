import { Container } from './styles';

import { Highlight } from '@components/Highlight/indext';
import { Header } from '@components/Header';
import { Input } from '@components/InputText/indext';

import { useTheme } from 'styled-components/native';

export function Players(){
    const {COLORS} = useTheme();
    
    return (
        <Container>
            <Header showBackButton/>
            
            <Highlight 
                title = "Nome da turma "
                subtitle= "adicione a galera e separe os times"
            />

            <Input
                placeholder="Nome do participante"
                placeholderTextColor={COLORS.GRAY_300}
            />

        </Container>
    );
}