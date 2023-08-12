import React,{useEffect,useState,useRef}from 'react';
import {View,Text,ActivityIndicator,ActionSheetIOS,StyleSheet,TouchableOpacity,Image,FlatList,Dimensions} from 'react-native';
import {Camera,useCameraDevices,takePhoto} from 'react-native-vision-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { PermissionsAndroid, Platform } from "react-native";


const Main=()=>{
    const devices = useCameraDevices()
    const device=devices.back
    const camera=useRef(null);
    const [imageData,setImageData]=useState(null);
    const [clickPhoto,setClickPhoto]=useState(false);

    useEffect(()=>{
        hasPermission();
        }, []);
    const hasPermission = async () => {
        const permission=
        Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE

        const hasPermission=await PermissionsAndroid.check(permission);
        const newCameraPermission = await Camera.requestCameraPermission();
        const newMicrophonePermission = await Camera.requestMicrophonePermission();
        if(hasPermission && newCameraPermission && newMicrophonePermission){
            return true;
        }
        const status = await PermissionsAndroid.request(permission);
        return status==='granted'
    }

        const checkPermission=async()=>{
            const newCameraPermission = await Camera.requestCameraPermission();
            const newMicrophonePermission = await Camera.requestMicrophonePermission();
        console.log(newCameraPermission)
        };
        if (device == null) return <ActivityIndicator />
        const takePicture=async()=>{
            if(camera!=null)
                {const photo=await camera.current.takePhoto();
                setImageData(photo.path);
                setClickPhoto(false);
                console.log(photo.path);
            }
        }
    return (
        <View style={{flex:1}}>
            {clickPhoto?(<View style={{flex:1}}>
                 <Camera
                       ref={camera}
                       style={StyleSheet.absoluteFill}
                       device={device}
                       isActive={true}
                       photo
                     />
                     <TouchableOpacity style={{
                     width:60,
                     height:60,
                     borderRadius:30,
                     backgroundColor:'grey',
                     position:'absolute',
                     alignSelf:'center',
                     bottom:50
                     }}onPress={()=>{
                     takePicture();
                     }}></TouchableOpacity>
                 </View>):(
                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 {imageData!=='' &&(
                 <Image
                    source={{uri:'file://'+imageData}}
                    style={{width:'90%',height:'80%'}}/>)}
                 <TouchableOpacity style={{width:'90%',height:50,borderWidth:1,alignSelf:'center',borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:5,marginBottom:5}} onPress={()=>{
                 setClickPhoto(true)}}>
                 <Text>Click Photo</Text>
                 </TouchableOpacity>
                 </View>
                 )}
         </View>
    )
};

export default Main;