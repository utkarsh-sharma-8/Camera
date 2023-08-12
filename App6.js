import React,{useEffect}from 'react';
import {View,Text} from 'react-native';
import {Camera} from 'react-native-vision-camera';


const App6= async()=>{

     useEffect(()=>{
            checkPermission();
        }, []);

     const checkPermission=async()=>{
            const newCameraPermission = await Camera.requestCameraPermission();
            const newMicrophonePermission = await Camera.requestMicrophonePermission();
            console.log(newCameraPermission);
        };
    return (
        <View>
            <Text style={{fontSize:50,fontWeight:'bold'}}>Congratulations you have successfully logged inn</Text>
        </View>
        )
};

export default App6;