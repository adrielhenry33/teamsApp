import { Container, Logo, BackIcon, BackButton } from "./styles";

import { useNavigation } from "@react-navigation/native";

import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean
}


export function Header ( {showBackButton = false}:Props ){
    
    const navigation = useNavigation();
    
    //Grousp > new Groups > players

    function handleGoBack(){
        navigation.navigate("groups");
        //navigation.popToTop(); volta pro inicio 
    }
    
    return (
        <Container>
            {
                showBackButton &&  
                <BackButton onPress={handleGoBack}>
                    <BackIcon   />
                </BackButton>
            
            }
            <Logo source={logoImg}/>
        </Container>
    );
}