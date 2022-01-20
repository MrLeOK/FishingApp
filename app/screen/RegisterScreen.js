import React , {useState} from 'react';
import {View , ScrollView, Text, Dimensions , ImageBackground , Image , StyleSheet , TouchableOpacity } from 'react-native';
import {Input, Item , Label , NativeBaseProvider , Checkbox, ListItem, Body } from 'native-base';
import FlatButton from '../../tools/button';
import { useNavigation } from '@react-navigation/native';
import {auth} from '../../firebase/firebase'

function RegisterScreen () {
const navigation = useNavigation(); 
const [text, setText] = useState('');
const [show, setShow] = React.useState(false)
const [isSignedIn, setIsSignedIn] = useState(false)
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const UserRegister = () => {
  auth.createUserWithEmailAndPassword(email,password)
  .then((userCredential) => {
     var user = userCredential.user;
    }).then(() =>{

    }).catch((error) =>{

  })
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage)
  })
}

return (

    // Container Start
    // Brand View
    <ScrollView 
    style={{flex : 1 , backgroundColor: '#674af9'}}
    showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../assets/seabg.jpg')}
        style={{height:Dimensions.get('window').height / 2.5 ,}}>
          <View style={styles.logoPosition}>
           <Image style={styles.logo} source={require("../assets/logowhite.png")}/>
          </View>
      </ImageBackground>
    {/* Bottom view */}
        <View style={styles.BottomView}>
           <View style={{padding : 30}}>
             <Text style={styles.welcomeText}>Register</Text>
             <TouchableOpacity onPress={() => navigation.navigate('Login')}>
             <Text style={{fontWeight:'bold' , color:'#313132'}}>Already have an account !</Text>
             </TouchableOpacity>
            {/* Form inputs View */}
            <View  style={{marginTop : 20 }}>
            <Input my={2} variant="rounded" placeholder="Your Name" />
            <Input my={2} variant="rounded" placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
            <Input my={2} variant="rounded" type={show ? "text" : "password"} placeholder="Password" value={password} onChangeText={text => setPassword(text)}/>
            <Input my={2} variant="rounded" type={show ? "text" : "password"} variant="rounded" placeholder="Confirm Password" />
            </View>
            <View style={{height : 100 , justifyContent :'center' , alignItems :'center'}}>
            <FlatButton text ='Register' onPress = {UserRegister} />
            </View>
           </View>
        </View>
    </ScrollView>
    // Container End
);
}

const styles = StyleSheet.create({
    logo : {
      width : 255,
      height : 100,
      bottom : 50
    },
    logoPosition : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      position : 'relative',
      bottom : -50

    },
    BottomView :{
      flex : 1.5,
      backgroundColor : '#674af9',
      bottom : 50,
      borderTopStartRadius : 50,
      borderTopEndRadius: 50
    },
    forgotPassView :{
      flex: 1,
      height : 80,
      marginTop : 20,
      flexDirection :'row',
      justifyContent : 'center'
    },
    welcomeText :{
      fontSize : 40,
      color : '#fff',
      alignItems : 'center',
      justifyContent : 'center'
    },

})

function App(){
    return (
      <NativeBaseProvider>
          <RegisterScreen />
      </NativeBaseProvider>
    )
  }
  export default App;


