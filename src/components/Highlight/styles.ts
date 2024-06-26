import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";


export const Container = styled(SafeAreaView) `
    width: 100%;
    margin: 32px 0;

`;

export const Title = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.XL }px;
        font-family: ${ theme.FONT_FAMILY.BOLD } ;
        color : ${ theme.COLORS.WHITE };
    
    `};
`;


export const Subtitle = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.MD }px;
        font-family: ${ theme.FONT_FAMILY.REGULAR } ;
        color : ${ theme.COLORS.GRAY_300 };
    
    `};
`;