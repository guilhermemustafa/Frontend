import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, FlatList } from 'react-native'

const produtos=[
    {
        id:'0192.168.0.10',
        email:['192.168.0.10']
    },
]

export default function Settings ({navigation})
{
    
        return (
         <View>

            <FlatList
                data={produtos}
                keyExtractor={item=>item.id}
                renderItem= {( {item}) =><View style={styles.item}><text style={styles.prod}>Email:{item.email[0]} </text>

            
              </View>
              

               
               
                }
               keyExtractor={ item => item.email}
           />  

           </View>
        )
    }
                         
    

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#2c3e50',
      padding:15,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    prod:{
        fontSize: 16,
        color: '#000'
    }
   })