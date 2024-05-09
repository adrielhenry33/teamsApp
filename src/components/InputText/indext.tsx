import { Container } from './styles';

import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components/native';


export function Input( { ...rest }: TextInputProps){

    const { COLORS } = useTheme();


    return(
        <Container
            placeholderTextColor={COLORS.GRAY_300} // AQUI ESTAMOS ESTILIZANOD O PLACEHOLDER ATRAVES
                                                   // DOS TEMAS PRE DEFINIDOS UTILIZANDO UM ESTADO
                                                   // COMO QUEREMOS SO AS CORES DESESTRUTURAMOS SOMENTE
                                                   // COLORS E NAO TODO O THEME 
            {...rest}
        />
    );
}