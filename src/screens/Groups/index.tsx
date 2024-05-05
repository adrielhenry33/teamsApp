import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight/indext';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { groupsGetAll } from '@storage/group/groupsGetAll';

import { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

/*
type Props = {
  navigation : NativeStackNavigationProp<RootParamList, 'groups'>;
}
*/

export function Groups() {
  
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroups(){
    navigation.navigate("new");
  }

  async function fetchGroups(){
    try {
      //buscando os grupos ja pre cadastrados na tela de groups 
      const data = await groupsGetAll();
      setGroups(data);

    } catch (error) {
      console.log("error");
    }
  }

  function handleOpenGroup(nameGroup: string ){
    navigation.navigate("players", {nameGroup});
  }
  
  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));
  
  return (
    <Container >
      <Header/>
      
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
            onPress={ () => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle ={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={()=> (
        <ListEmpty 
          message="Que tal cadastrar a primeira turma?"
          />
        )}
        showsVerticalScrollIndicator ={false}
      />

        <Button 
            title = "Criar uma nova turma" 
            onPress={handleNewGroups}
        />

    </Container>
  );
}


