import{View,Text,TouchableOpacity} from 'react-native'
import React from'react'
export default function Btn({bgColor,btnLabel,textColor,Press}){
    return(
    <TouchableOpacity onPress={Press} style={{backgroundColor:bgColor,borderRadius:100,alignItems:'center',width:350,paddingVertical:3,
    marginTop:10
    }}>
        <Text style={{color:textColor,fontSize:22}}>{btnLabel}</Text>
    </TouchableOpacity>

    );
}