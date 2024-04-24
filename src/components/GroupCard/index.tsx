import { Icon, Title, Container } from './styles';
import { TouchableOpacityProps } from 'react-native';


type Props = TouchableOpacityProps & {
    title : string;
}

export function GroupCard({ title, ...rest }: Props){
    return (
        <Container>
            <Icon/>
            <Title >
                {title}
            </Title>
        </Container>
    );
}