import { Icon, Title, Container } from './styles';
import { TouchableOpacityProps } from 'react-native';


type Props = {
    title : string;
}

export function GroupCard({ title  }: Props){
    return (
        <Container>
            <Icon/>
            <Title >
                {title}
            </Title>
        </Container>
    );
}