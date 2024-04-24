import { TouchableOpacity } from 'react-native';
import styled,{ css } from 'styled-components/native';


export type FilterStyleProps = {
    isActive?: boolean;//quero saber se esta selecionado o botao

}

//como o botao sera clicavel, eu declaro o container com a propriedade
// de Toucheble
// em seguida passo a tipagem para esse botao 


// o botao so ira ficar verde quando
// for clicado para isso eu passo para
// o css helper o isActive que significa
// que quando ele for verdadeiro a borda ira 
// aparecer por isso isActvie &&
export const Container = styled(TouchableOpacity) <FilterStyleProps> `

    ${({ theme, isActive }) => isActive && css`    
     border: 1px solid ${theme.COLORS.GREEN_700};
`   };
    
    border-radius: 4px;
    margin-right: 12px;

    height: 38px;
    width: 70px;

    align-items: center;
    justify-content: center;

`;

export const Title = styled.Text`
    
    text-transform: uppercase;
    
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE};

    `};

`;