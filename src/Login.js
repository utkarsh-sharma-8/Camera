import React,{useEffect,useState} from 'react';
import {View,StyleSheet,Text,TextInput,TouchableOpacity,Alert} from 'react-native';
import Background from './Background';
const darkGreen='#006A42';
import Field from './Field';
import Btn  from'./Btn';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import uuid from'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';


const Login=(props)=>{
const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [visible,setVisible]=useState(false)
    const navigation=useNavigation();
    const loginUser=()=>{
        setVisible(true);
        firestore().collection("users").where("email","==",email).where("password","==",password).get().then(res=>{
            setVisible(false);
            if(res.docs!==[]){
            console.log(JSON.stringify(res.docs[0].data()));
            gotoNext(res.docs[0].data().name,res.docs[0].data().email,res.docs[0].data().userId)
            }else{
                Alert.alert('user not Found');
            }
        })
        .catch(error=>{
            setVisible(false);
            console.log(error);
            Alert.alert('User not found');
        });
    };
const gotoNext=async(name,email,userId)=>{
    await AsyncStorage.setItem('NAME',name);
    await AsyncStorage.setItem('EMAIL',email);
    await AsyncStorage.setItem('USERID',userId);
    navigation.navigate("Main");
};

    return(
    <Background>
        <View style={{alignItems:"center",width:460}}>
        <Text style={{color:'white',fontSize:50,fontWeight:"bold",marginVertical:10,}}>Login</Text>
        <View style={{backgroundColor:'white',height:700,width:460,borderTopLeftRadius:100,alignItems:"center"}}>
        <Text style={{fontSize:30,color:{darkGreen},fontWeight:"bold"}}>Welcome Back</Text>
        <Text style={{color:'grey',fontSize:20,fontWeight:"bold",marginBottom:20}}>Login To Your Account</Text>
        <TextInput style={{borderRadius:100,color:darkGreen,paddingHorizontal:10,width:'80%'}}
                 placeholderTextColor={darkGreen} placeholder="Email" value={email} onChangeText={(text)=>setEmail(text)}/>
        <TextInput style={{borderRadius:100,color:darkGreen,paddingHorizontal:10,width:'80%',}}
                 placeholderTextColor={darkGreen} placeholder="Password" value={password} secureTextEntry={true} onChangeText={(text)=>setPassword(text)}/>
        <View style={{alignItems:"flex-end",width:"78%",paddingRight:16,marginBottom:160}}>
        <Text style={{color:"blue",fontWeight:"bold",fontSize:16}}>
        Forgot Password?
        </Text>
        </View>
        <TouchableOpacity style={{backgroundColor:{darkGreen},borderRadius:100,alignItems:'center',width:350,paddingVertical:3,
                              marginTop:10
                              }} onPress={()=>{loginUser()}}>
                        <Text style={styles.bStyle}>Login</Text>
                    </TouchableOpacity>
        <View style={{display:'flex',flexDirection:"row",justifyContent:"center"}}>
        <Text style={{fontSize:16,fontWeight:"bold"}}>Don't have an account?  </Text>
        <TouchableOpacity onPress={()=> props.navigation.navigate("SignUp")}>
        <Text style={{color:darkGreen,fontWeight:"bold",fontSize:16}}> SignUp</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
    </Background>
    );
}
const styles=StyleSheet.create({
    bStyle:{
        height:40,
        paddingHorizontal:8,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        marginTop:10,
        paddingVertical:3,

    }
});
export default Login;