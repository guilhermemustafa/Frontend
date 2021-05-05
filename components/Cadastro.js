import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function App({navigation}) {


  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" 
      />

<TextInput
      style={styles.Input}
      onChangeText={ text => setNome(text) }
      placeholder="digite seu Nome"
      />

      <TextInput
      style={styles.Input}
      placeholder="digite seu email"
      />

      <TextInput
      style={styles.Input}
      secureTextEntry={true}
      placeholder="digite sua senha"
      />

      <TouchableOpacity
      style={styles.botao}
      onPress={ () => {navigation.navigate('Home', {'nome': setNome(text)} ) } }
      >
        <Text style={styles.botaoText}>Login</Text>
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
});