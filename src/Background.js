import React,{useState} from "react";
import{
  Text,
  View,
  Button,
  TextInput,
  ImageBackground
} from 'react-native';
const Background=({children})=>{
    return(
    <View>
        <ImageBackground source={require("./leaves2.jpg")} style={{height:'100%'}}/>
        <View style={{position:"absolute"}}>
            {children}
        </View>
    </View>

    );
}

export default Background;