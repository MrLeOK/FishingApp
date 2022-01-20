import React from 'react';
import { View , StyleSheet, Text, Image, ImageBackground } from 'react-native';
import FlatButton from '../../tools/button';



function WelcomeScreen({navigation}) {
    return (
        <ImageBackground source={require('../assets/seabg.jpg')} style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logowhite.png")}/>
          <View style={{width:'100%' , padding : 15 , marginVertical : 5 , alignItems:'center' ,flex:0.4, flexDirection:'column', justifyContent:'space-evenly'}}>
            <FlatButton style={{}} text ='Sign in' onPress = {() => navigation.navigate('Login')} />
            <FlatButton text ='Sign up' onPress = {() => navigation.navigate('Register')} />
          </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    backgroundColor: '#7028f8',
    justifyContent: 'center',
    alignItems: "center"
  },
  startButton : {
    fontSize : 30
  },

  logo : {
      width : 255,
      height : 100,
      bottom : 50
  }
})

export default WelcomeScreen;