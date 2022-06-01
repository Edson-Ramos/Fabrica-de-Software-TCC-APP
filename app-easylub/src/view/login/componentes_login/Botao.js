import React from "react";
import {TouchableOpacity, StyleSheet, Text} from 'react-native'
import {Login} from './inputs'
import {useNavigation} from '@react-navigation/native'

export default function Botao(){
  const navigation = useNavigation();

    return<>
        <TouchableOpacity style={estilos.btnSubmit}>
            <Text style={estilos.submitText} onPress={()=>{
              navigation.navigate('Servicos')
            }}>Entrar</Text>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
  btnSubmit:{
    backgroundColor:'#35AAFF',
    width: '50%',
    height: 45,  
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
},
submitText:{
  color:'#FFF',
  fontSize:18
},
});