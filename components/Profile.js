import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function Home ({navigation})
{
    state = {
        nome: ''
      }
    
          
        const nomeUsuario = navigation.getParam('nome');

        return (
            <View style={styles.container} >

          <Image
           style={styles.logo}
           source={require('../assets/profile.png')}                
            />
            <Text style={styles.text}>
                Ola { nomeUsuario } !!!
            </Text>

            <Text style={styles.text1}>
                Esse é o seu profile
            </Text>

            </View>
        )
    } 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c3e50',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    text: {
        fontSize: 20,
        color:'#ecf0f1'
    },
    text1: {
        fontSize: 16,
        color: '#2c3e50'
    }

})