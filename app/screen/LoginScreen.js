import React , {useState} from 'react';
import {View , ScrollView, Text, Dimensions , ImageBackground , Image , StyleSheet, TouchableOpacity , TouchableHighlight } from 'react-native';
import {Input, Item , Label , NativeBaseProvider , Checkbox, ListItem, Body , Button, Icon } from 'native-base';
import FlatButton from '../../tools/button';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";
import {auth} from '../../firebase/firebase';
import {SignOut} from 'firebase/compat/auth';



function LoginScreen () {
const navigation = useNavigation(); 
const [text, setText] = useState('');
const [show, setShow] = React.useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isSignedIn, setIsSignedIn] = useState(false);

const SignInUser = () => {
  auth.signInWithEmailAndPassword(email, password)
  .then((re) =>{
    setIsSignedIn(true);
  })
  .catch((re) => {
    console.log(re);
  })
}

const SignOutUser = () => {
  auth.signOut()
  .then((re) => {
    setIsSignedIn(false);
  })
  .catch((re) => {
    console.log(re);
  })
}


return (

    // Container Start
    // Brand View
    <ScrollView 
    style={{flex : 1 , backgroundColor: '#674af9' }}
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
             <Text style={styles.welcomeText}>Welcome</Text>
             <Text style={{color: '#cacaca'}}>Don't have an account .
               <TouchableHighlight onPress={() => navigation.navigate('Register')}>
                 <Text style={{color : '#313132' , fontWeight :'bold'}} >{''} Register now ?</Text> 
               </TouchableHighlight>
             </Text>
            {/* Form inputs View */}
            <View  style={{marginTop : 20 }}>
            <Input my={2} variant="rounded" placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
            <Input my={2} variant="rounded" secureTextEntry={true} placeholder="Password"  value={password} onChangeText={text => setPassword(text)}/>
            </View>
            {/* Remember Me & Fogot Password */}
            <View style={styles.forgotPassView}>
              <View >
                 <View style={{alignSelf :'flex-start', marginLeft : -20 }}>
                 <Checkbox color='black' value="one" >Remember Me</Checkbox>
                 </View>
                 <View style={{alignSelf:'flex-start' ,  marginTop : 20}}>
                 <TouchableOpacity>
                 <Text style={{color: '#cacaca'}}>Forgot Password!</Text>
                 </TouchableOpacity>
                 </View>
              </View>
            </View>
            {/* Login Complete */}
            {isSignedIn === true?

            <View style={{height : 100 , justifyContent :'center' , alignItems :'center'}}>
            <FlatButton text ='Sign out' onPress = {SignOutUser} />
            </View>
            :
            <View style={{height : 100 , justifyContent :'center' , alignItems :'center'}}>
            <FlatButton text ='Login' onPress = {SignInUser} />
            </View>
            }
            {/* Social Button */}
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'center' , color:'#cacaca'}}>or Login with</Text>
            <View style={styles.socialLoginView}> 
              <Button icon style={{width:60 , backgroundColor:'#4267b2'}} rounded={20}>
                <Icon as={MaterialCommunityIcons} name='facebook' style={{color:'#fff'}}></Icon>
              </Button>
              <Button icon style={{width:60 , backgroundColor:'#00acee'}} rounded={20}>
                <Icon as={MaterialCommunityIcons} name='twitter' style={{color:'#fff'}}></Icon>
              </Button>
              <Button icon style={{width:60 , backgroundColor:'#db4a39'}} rounded={20}>
                <Icon as={MaterialCommunityIcons} name='google-plus' style={{color:'#fff'}}></Icon>
              </Button>
            </View>
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
    socialLoginView :{
      flexDirection :'row',
      flex : 1,
      justifyContent:'space-around',
      marginTop : 20
    }

})
function App(){
  return (
    <NativeBaseProvider>
        <LoginScreen />
    </NativeBaseProvider>
  )
}
export default App;


