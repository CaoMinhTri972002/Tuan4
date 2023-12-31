import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Button} from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';


export default function App() {
    return (
  
      <View style={styles.container}>
    

        <StatusBar style="auto" />
          <View style={styles.style1}>
            <Image source={require('./assets/lock.png')}
                   style={{width:'150px',height:'150px'}}
            >
              
            </Image>
          </View>
          <View style={styles.style2}>
          <Text style={{fontSize: 20,textAlign:'center',fontWeight:'bold'}}>{'FORGET \n PASSWORD'}</Text>
         
             
  
  
  </View>
  <View style={styles.style3}>
        <Text style={styles.innerText}>provide your account's email for which you<br/>want to reset your password </Text>
          </View>
          <View style={styles.style4}>
  
  </View>
  <View style={styles.style4}>
  <Image style={styles.mailIcon} source={require('./assets/mail.png')}
 >
  </Image>
  <TextInput style={styles.input} placeholder="Email"></TextInput>

  </View>
  <View style={styles.style5}>
     <TouchableOpacity>
                <Text style={styles.btnSubmit}>NEXT</Text>
            </TouchableOpacity>
  
  </View>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundImage:'linear-gradient(to bottom,white, cyan)'
    },
    
    style1:{
      flex: 2,
     
      justifyContent:'space-around',
      alignItems:'center'
    },

    mailIcon:{
         position:'absolute',
         width:"40px", 
         position: "absolute",
         left: 55,
         height: "45px"
    },
    btnSubmit: {
      width: 280,
      textAlign: "center",
      fontWeight: 700,
      backgroundColor: "#E3C000",
      paddingVertical: "12px"
  },
    style2:{
      flex: 0.8,
     
      justifyContent: 'center',
      alignItems: 'center',
      textAlign:'center'
     
     
   
    },
    style3:{
      flex: 0.5,
    
      justifyContent:'center',
      alignItems:'center'
   
  
    },
    innerText:{
      color:'black',
      textAlign:'center'
    },
    
    style4:{
  
      flex: 0.5,
      width: "100%",
      position: "relative",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: "40px"

      
      
     
    },
    input:{
  borderWidth:1,
  position:'absolute',
  borderColor: '#777',
  padding:8,
  backgroundColor:'gray',
  width:235,
  right:60,
  height:45
    },
    style5:{
        
        flex: 0.5,
   
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'space-evenly'
    
    

   
      },
   
  });
  