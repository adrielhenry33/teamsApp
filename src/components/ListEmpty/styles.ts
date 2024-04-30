import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";


export const Container = styled(SafeAreaView) `
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text `
    text-align: center;
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.SM }px;
        font-family: ${ theme.FONT_FAMILY.REGULAR };
        color: ${ theme.COLORS.GRAY_300 };
    `};
    
`;