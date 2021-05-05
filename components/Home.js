import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View,  TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function App({navigation}) {

    state = {
        nome: ''
      }

      return (

        <View style={styles.container}>
          <Text>Bem Vindo a Home !</Text>
          <StatusBar style="auto" 
          />
       
            <TouchableOpacity
          style={styles.botao}
          onPress={ () => {navigation.navigate('Profile', {'nome': this.state.nome}) } }
          >
          <Text style={styles.botaoText}>Profile</Text>
          </TouchableOpacity>


          <TouchableOpacity
          style={styles.botao2}
          onPress={ () => {navigation.navigate('Settings', {'nome': this.state.nome}) } }
          >
          <Text style={styles.botaoText}>Settings</Text>
          </TouchableOpacity>
        </View>
       )}

       const styles = StyleSheet.create ({
            container: {
            flex: 1,
            backgroundColor: '#2c3e50',
            alignItems: 'center',
            justifyContent: 'center',
        },
        botao: {
            width: 150,
            height: 20,
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
        
        botao2:{
            width:150,
            height: 20,
            backgroundColor: '#008000',
            marginTop: 10,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
        },
        botaoText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff'
        }
















       })