import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight/indext';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';


import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Groups() {
  
  const [groups, setGroups] = useState<string[]>([]);
  
  const navigation = useNavigation();

  function handleNewGroups(){
    navigation.navigate('players', {group: 'galera do voleis'});//propriedade usse navigation
  }

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
        ListEmptyComponent={()=> (
        <ListEmpty 
          message="Que tal cadastrar a primeira turma?"
          />
        )}
      />

        <Button title = "Criar uma nova turma" 
        onPress={handleNewGroups}
        />

    </Container>
  );
}


