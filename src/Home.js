import React from'react'
import {View,Text,StyleSheet} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
const Home=(props)=>{
        return(
        <Background>
            <View style={{marginHorizontal:40,marginVertical:100}}>
            <Text style={{color:'white',fontSize:64}}>let's Start
            </Text>
            <Btn bgColor={darkGreen} textColor='white' btnLabel='Login' Press={()=> props.navigation.navigate ('Login')} />
            <Btn bgColor='white' textColor='green' btnLabel='SignUp' Press={()=> props.navigation.navigate ('SignUp')} />
            </View>
        </Background>
        );
}
export default Home;