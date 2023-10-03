import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <View style={styles.style1}>
          <Image source={require('./assets/Ellipse 8.png')}
                 style={{width:'200px',height:'200px'}}
          >
            
          </Image>
        </View>
        <View style={styles.style2}>
        <Text style={{fontSize: 20,textAlign:'center'}}>{'GROW \n YOUR BUSINESS'}</Text>
       
           


</View>
<View style={styles.style3}>
      <Text style={styles.innerText}>We will help you to grow your business using<br/>online server </Text>
        </View>
        <View style={styles.style4}>

</View>
<View style={styles.style4}>
<Button  title='LOGIN'  color='#E3C000'  ></Button>
<Button title='SIGN UP' color='#E3C000'  ></Button>

</View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#00CCF9',
    flex: 1,

  },
  style1:{
    flex: 2,
   
    justifyContent:'space-around',
    alignItems:'center'
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
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',     
    marginVertical: 20,    
   
  },
});
