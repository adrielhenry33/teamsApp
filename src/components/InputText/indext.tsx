import { Container } from './styles';

import { TextInputProps, TextInput } from 'react-native';

import { useTheme } from 'styled-components/native';

type Props = TextInputProps& {
    inputRef?: React.RefObject<TextInput>;
}


export function Input( {inputRef, ...rest }: Props){

    const { COLORS } = useTheme();


    return(
        <Container
            ref = {inputRef}
            placeholderTextColor={COLORS.GRAY_300} // AQUI ESTAMOS ESTILIZANOD O PLACEHOLDER ATRAVES
                                                   // DOS TEMAS PRE DEFINIDOS UTILIZANDO UM ESTADO
                                                   // COMO QUEREMOS SO AS CORES DESESTRUTURAMOS SOMENTE
                                                   // COLORS E NAO TODO O THEME 
            {...rest}
        />
    );
}