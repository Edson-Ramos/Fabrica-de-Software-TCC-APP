import React, {useState} from 'react'
import {TextInput, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../../../servicos/api';


import {useNavigation} from '@react-navigation/native'

export default function Inputs(){
        const navigation = useNavigation();
    
        const [email, set_email] = useState('');
        const [senha, set_senha] = useState('');

       


  function entrar (email, senha){
    
            const dados ={
             email: email,
             password: senha
         }
         
     fetch(`${api}/login`,
     {
         method : "POST",
         body : JSON.stringify(dados),
         headers : {
             "Content-Type" : "application/json"
         }
     })
      .then(response => {
             if (response.status != 200){                                 
               return  Alert.alert("Erro","Verifique Seu Email e Senha") 
             } 
            else{
              navigation.reset({
                    index:0,
                    routes:[{name: "Servicos"}]                    
                  })
              return response.json()
            }
                
      })
      .then((data) =>{   
            AsyncStorage.setItem("token", data.access_token);
            AsyncStorage.setItem("nome", data.nome);
          Alert.alert("Bem Vindo ", data.nome)
      })
  }
    return<>
    <TextInput
              style={estilos.input}
              placeholder="Email"
              autoCorrect={false}
              onChangeText={(text)=>{set_email(text)}}
              keyboardType="email-address"
            />
    <TextInput
              style={estilos.input}
              placeholder="Senha"
              autoCorrect={false}
              onChangeText={(text)=>{set_senha(text)}}
              secureTextEntry = {true}
             />
    <TouchableOpacity style={estilos.btnSubmit}>
            <Text style={estilos.submitText} onPress={()=>{entrar(email, senha)}}>Entrar</Text>
    </TouchableOpacity>
        
    </>
}

const estilos = StyleSheet.create({
input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
},
btnSubmit:{
    backgroundColor:'#35AAFF',
    width: '50%',
    height: 45,  
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    },
submitText:{
  textAlign:"center",
  color:'#FFF',
  fontSize:18,
  width:"100%"
},
})