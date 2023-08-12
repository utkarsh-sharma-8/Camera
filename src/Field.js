import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
const darkGreen='#006A42';
const Field=props=>{
    return(
        <TextInput {...props}
        style={{borderRadius:100,color:darkGreen,paddingHorizontal:10,width:'80%',}} placeholderTextColor={darkGreen}>
        </TextInput>
    );
}

export default Field;