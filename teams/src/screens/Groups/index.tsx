
import { Container } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight/indext';


export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight
        title = "Turmas"
        subtitle="jogue com sua turma"
        />
    </Container>
  );
}


