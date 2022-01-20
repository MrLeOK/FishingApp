// import React , {useState} from 'react';
// import { View , StyleSheet, Text, Image, ImageBackground } from 'react-native';
// import FlatButton from '../../tools/button';
// import {auth} from '../../firebase/firebase';

// const [isSignedIn, setIsSignedIn] = useState(true);

// const SignInUser = () => {
// //   auth.signInWithEmailAndPassword(email, password)
// //   .then((re) =>{
// //     setIsSignedIn(true);
// //   })
// //   .catch((re) => {
// //     console.log(re);
// //   })
// // }

// // const SignOutUser = () => {
// //     auth.signOut()
// //     .then((re) => {
// //       setIsSignedIn(false);
// //     })
// //     .catch((re) => {
// //       console.log(re);
// //     })
// //   }

// // function TrueLoginScreen({navigation}) {
// //     return (
// //         <ImageBackground source={require('../assets/seabg.jpg')} style={styles.container}>
// //             <Image style={styles.logo} source={require("../assets/logowhite.png")}/>
// //             {isSignedIn === true ?
// //             <View style={{height : 100 , justifyContent :'center' , alignItems :'center'}}>
// //             <FlatButton text ='Sign out' onPress = {SignOutUser} />
// //             </View>
// //             :
// //             <View style={{height : 100 , justifyContent :'center' , alignItems :'center'}}>
// //             <FlatButton text ='Go back' onPress = {() => navigation.navigate('LoginScreen')} />
// //             </View>
// //             }
// //         </ImageBackground>

// //     );
// // }

// // const styles = StyleSheet.create({
// //   container : {
// //     flex: 1, 
// //     backgroundColor: '#7028f8',
// //     justifyContent: 'center',
// //     alignItems: "center"
// //   },
// //   startButton : {
// //     fontSize : 30
// //   },

// //   logo : {
// //       width : 255,
// //       height : 100,
// //       bottom : 50
// //   }
// }


// export default TrueLoginScreen;