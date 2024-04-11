import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight/indext';
import { GroupCard } from '@components/GroupCard';


export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight
        title = "Turmas"
        subtitle="Jogue com sua turma"
      />
      <GroupCard title="Galera" />
    </Container>
  );
}


