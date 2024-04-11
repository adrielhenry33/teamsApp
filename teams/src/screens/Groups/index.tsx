import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight/indext';
import { GroupCard } from '@components/GroupCard';

import { useState } from 'react';
import { FlatList } from 'react-native';


export default function Groups() {
  
  const [groups, setGroups] = useState<string[]>(['Rocktet', 'Cruzeiro']);
  
  return (
    <Container>
      <Header />
      
      <Highlight
        title = "Turmas"
        subtitle="Jogue com sua turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item} //extrair uma valor unico para cada item da lista
        renderItem={({ item }) => (
          <GroupCard
          title={item}
          />
        )}
      />

      
    </Container>
  );
}


