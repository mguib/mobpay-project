import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet,
    Text,
    TouchableOpacity, 
    View,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Card } from '../Card';
import { Header } from '../Header';
import api from '../../services/Api';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';



interface UserData{
  cidade: string;
  email: string;
  endereco: string;
  estado: string;
  id: string;
  idade: number;
  nome: string;
}

export function Home() {
  
  const navigation = useNavigation();


  const [users, setUsers] = useState<UserData[]>([])

  useEffect(()=>{
    api.get("/obterClientes").then((response) =>{
      setUsers(response.data.clientes);
    })
  },[])

  function handleDetails(user: UserData){
    navigation.navigate('Details', {user})
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      
      <ScrollView
      >
        {
          users.map((user) => (
            <Card
              key={user.id}
              id={user.id}
              nameUser={user.nome}
              userEstado={user.estado}
              onPress={() => handleDetails(user)}
            />
          ))
        }
        
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  userCard: {
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#d4d0e9',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10
  },
  textIdUser: {
    paddingHorizontal: 20,
    color: "#fff",
    fontWeight: 'bold', 
  },
  user: {
    flexDirection:'row',
  },
  textNameUser: {
    paddingHorizontal: 20
  },
  textEstadoUser: {
    marginLeft: 30,
  }
});
