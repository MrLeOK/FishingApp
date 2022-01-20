
import WelcomeScreen from './app/screen/WelcomeScreen';
import LoginScreen from './app/screen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './app/screen/RegisterScreen';
import TrueLoginScreen from './app/screen/TrueLoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown : false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown : false}}/>
        {/* <Stack.Screen name="TrueLoginScreen" component={TrueLoginScreen} options={{headerShown : false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}