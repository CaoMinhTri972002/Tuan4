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
            <Text style={{fontSize:50,fontStyle:'Roboto',fontWeight:'bold',textAlign:'center'}}>CODE  </Text>
            
              
          
          </View>
          <View style={styles.style2}>
          <Text style={{fontSize: 20,textAlign:'center',fontWeight:'bold'}}>{'VERIFICATION'}</Text>
         
             
  
  
  </View>
  <View style={styles.style3}>
        <Text style={styles.innerText}>Enter ontime password sent on<br/>++849092605798
 </Text>
          </View>
          <View style={styles.style4}>
  
  </View>
  <View style={styles.style4}>


  <TextInput style={styles.input}></TextInput>

  <TextInput style={styles.input1}></TextInput>
  
  <TextInput style={styles.input2}></TextInput>
  
  <TextInput style={styles.input3}></TextInput>
  
  <TextInput style={styles.input4}></TextInput>
  
  <TextInput style={styles.input5}></TextInput>
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
input1:{
    borderWidth:1,
    position:'absolute',
    padding:8,
    backgroundColor:'#C4C4C400',
    borderWidth:'1px',
    width:50,
    right:108,
    height:50
},
input2:{
    borderWidth:1,
    position:'absolute',
    padding:8,
    backgroundColor:'#C4C4C400',
    borderWidth:'1px',
    width:50,
    right:155,
    height:50
},
input3:{
    borderWidth:1,
    position:'absolute',
    padding:8,
    backgroundColor:'#C4C4C400',
    borderWidth:'1px',
    width:50,
    right:205,
    height:50
},
input4:{
    borderWidth:1,
    position:'absolute',
    padding:8,
    backgroundColor:'#C4C4C400',
    borderWidth:'1px',
    width:50,
    right:253,
    height:50
},
input5:{
    borderWidth:1,
    position:'absolute',
    padding:8,
    backgroundColor:'#C4C4C400',
    borderWidth:'1px',
    width:50,
    right:303,
    height:50
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
      
      flexDirection: "row",
      justifyContent:'center',
      alignItems: "center",
      marginBottom: "40px",
    
      
      
     
    },
    input:{
  borderWidth:1,
  position:'absolute',
  padding:8,
  backgroundColor:'#C4C4C400',
  borderWidth:'1px',
  width:50,
  right:60,
  height:50
    },
    style5:{
        
        flex: 0.5,
   
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'space-evenly'
    
    

   
      },
   
  });
  