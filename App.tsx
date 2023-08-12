import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Camera} from 'react-native-camera-vision';
import Home from'./src/Home';
import Main from './src/Main';
import SignUp from'./src/SignUp';
import Login from'./src/Login';
import Splash from './src/Splash';
// import firebase from 'firebase/app';
// import 'firebase/auth'; // Import other Firebase services you need (e.g., firestore, storage, etc.)
//
// import firebaseConfig from './src/firebaseConfig';

const Stack=createNativeStackNavigator();

const App=()=>{
//     useEffect(() => {
//         if (!firebase.apps.length) {
//           firebase.initializeApp(firebaseConfig);
//         }
//   }, []);
//   try {
//              const { user } = await firebase.auth().signInWithEmailAndPassword('user@example.com', 'password');
//              setUser(user);
//            } catch (error) {
//              console.log(error.message);
//            };

    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
             <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component ={Home}/>
            <Stack.Screen name="Login" component ={Login}/>
            <Stack.Screen name="SignUp" component ={SignUp}/>
            <Stack.Screen name="Main" component ={Main}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;