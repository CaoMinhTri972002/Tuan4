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
            <Text style={{fontSize:50,fontStyle:'Roboto',fontWeight:'bold',textAlign:'center'}} >LOGIN </Text>
            
              
          
          </View>
          <View style={styles.style2}>
         <View style={{width: "100%", marginBottom: "40px",left:20}}>
            <TextInput style={{backgroundColor: 'rgba(0, 0, 0, 0.1)',height:'45px',width:'350px',paddingVertical: "12px"}} placeholder='Email'></TextInput>
         </View>
         <View>            
            <TextInput style={{backgroundColor: 'rgba(0, 0, 0, 0.1)',height:'45px',width:'350px',paddingVertical: "12px"}} placeholder='Password'></TextInput>
            <Image style={styles.icon} 
            source={require('./assets/eye.png')}></Image>


</View>

             
  
  
  </View>
  <View style={styles.style3}>
       <TouchableOpacity style={styles.btn}>
         <Text style={{textAlign:'center', marginTop:'10px', fontWeight:'bold',color:'#D8EFDE'}}>LOGIN</Text>

        </TouchableOpacity>

          </View>

          <View style={styles.style4}>
  
  </View>
  <View style={styles.style4}>
  <Text style={{textAlign:'center'}}>When you agree ti tems and conditions <br/> <p style={{color:'purple'}}>Forgot your password</p> <br/>Or login with     </Text>


  </View>
  <View style={styles.style5}>
    
  
  </View>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundColor:'#31AA5230'
    },
   
    icon:{
     width:25,
     height:25,
     position:'absolute',
     left:300,
     top:12
    },
    btn:{
backgroundColor:'#c34e38',
marginTop:'60px',
width:'350px',
height:'40px',
textAlign:'center',

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
     
      flexDirection: "row",
      justifyContent:'center',
   
      alignContent:'center',
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
  