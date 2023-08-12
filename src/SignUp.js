import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Background from './Background';
const darkGreen = '#006A42';
import Field from './Field';
import Btn from './Btn';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import firestore from "@react-native-firebase/firestore"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Main from './Main';
import uuid from'react-native-uuid';

const SignUp = (props) => {
  const [user, setUser] = useState(null);
  const [name,setName]=useState('');
  const [mobile,setMobile]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
     const navigation = useNavigation();

     const registerUser=()=>{
         const userId=uuid.v4()
             firestore().collection("users").doc(userId).set({
                 name:name,
                 email:email,
                 password:password,
                 mobile:mobile,
                 userId:userId,
             }).then(res=>{
                 console.log("User Created");
                 navigation.navigate("Main");
             }).catch(error=>{
                 console.log(error);
             });
         };
         const validate=()=>{
             let isValid=true;
             if(name==""){
                 isValid=false;
             }
             if(email==""){
                 isValid=false;
             }
             if(mobile==""){
                 isValid=false;
             }
             if(password==""){
                 isValid=false;
             }
             if(confirmPassword==""){
                 isValid=false;
             }
             if(confirmPassword!==password){
                 isValid=false;
             }
             return isValid;
         }
    return(
    <Background>
        <View style={{alignItems:"center",width:460}}>
        <Text style={{color:'white',fontSize:50,fontWeight:"bold",marginTop:20,}}>Register</Text>
        <Text style={{color:'grey',fontSize:20,fontWeight:"bold",marginBottom:20}}>Create an account</Text>
        <View style={{backgroundColor:'white',height:700,width:460,borderTopLeftRadius:100,alignItems:"center"}}>
        <Text style={{fontSize:30}}>Welcome</Text>
        <TextInput style={{borderRadius:100,color:darkGreen,paddingHorizontal:10,width:'80%',}} placeholderTextColor={darkGreen}
                  placeholder="First Name" value={name} onChangeText={(text)=>setName(text)}/>

         <TextInput style={{borderRadius:100,color:darkGreen,paddingHorizontal:10,width:'80%'}}
         placeholderTextColor={darkGreen} placeholder="Email" value={email} onChangeText={(text)=>setEmail(text)}/>

         <TextInput style={{borderRadius:100,color:darkGreen,paddingHorizontal:10,width:'80%',}}
         placeholderTextColor={darkGreen} placeholder="Contact number" value={mobile} keyboardType={"number-pad"} onChangeText={(text)=>setMobile(text)}/>
         <TextInput style={{borderRadius:100,color:darkGreen,paddingHorizontal:10,width:'80%',}}
         placeholderTextColor={darkGreen} placeholder="Password" value={password} secureTextEntry={true} onChangeText={(text)=>setPassword(text)}/>

        <TextInput style={{borderRadius:100,color:darkGreen,paddingHorizontal:10,width:'80%',}}
                 placeholderTextColor={darkGreen} placeholder="Confirm Password" value={confirmPassword} secureTextEntry={true} onChangeText={(text)=>setConfirmPassword(text)}/>
        <View style={{alignItems:"flex-end",width:"78%",paddingRight:16,marginBottom:70}}>
        </View>
        <TouchableOpacity  onPress={()=>{
                                          if(validate()){
                                              registerUser();
                                          }else{
                                              Alert.alert("Please Enter correct Data");
                                          }
                                      }} style={{backgroundColor:"blue",borderRadius:100,alignItems:'center',width:350,paddingVertical:3,
            marginTop:10
            }}><Text>SignUp</Text>
            </TouchableOpacity>

        <View style={{display:'flex',flexDirection:"row",justifyContent:"center"}}>
        <Text style={{fontSize:16,fontWeight:"bold",marginBottom:50}}>Already have an account?  </Text>
        <TouchableOpacity onPress={()=> props.navigation.navigate("Login")}>
        <Text style={{color:darkGreen,fontWeight:"bold",fontSize:16,height:30,marginBottom:50}}> Login</Text>
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
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        marginTop:10,
        paddingVertical:3,

    }
});

export default SignUp;