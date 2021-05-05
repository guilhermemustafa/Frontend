import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import api from './api'
import { AsyncStorage } from 'react-native'



export default function App({navigation}) {

  const[nome,setNome] = useState ("")
  const[password,setPassword] = useState("")
  


  async function logar () {
    try{const response = await api.post('/auth/authenticate', {nome, password})
    const {user, token} = response.data
    await AsyncStorage.multiSet([
      ['@CodeApi:token', token],
      ['@CodeApi:user', JSON.stringify(user)],
    ])
  } catch (err){
    console.log(err)
  }
  }


  
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" 
      />

      <TextInput
      style={styles.Input}
      onChangeText={ text => setNome(text)}
      placeholder="digite seu email"
      />

      <TextInput
      style={styles.Input}
      onChangeText={ text => setPassword(text)}
      secureTextEntry={true}
      placeholder="digite sua senha"
      />

      <TouchableOpacity
      style={styles.botao}
      onPress={ () => {navigation.navigate('Home', {'nome': setNome(text)}) } }
      >
        <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.botao1}
      onPress={ () => {navigation.navigate('Cadastro') } }
      >
        <Text style={styles.botaoText}>Cadastro</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
 Input: {
   marginTop: 10,
   width: 300,
   backgroundColor: '#fff',
   fontSize: 16,
   fontWeight: 'bold',
   borderRadius: 5
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
},
botaoText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#fff'
},
botao1:{
    width:300,
    height: 42,
    backgroundColor: '#FF0000',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
},
botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
},
});