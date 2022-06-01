import React, {useState, useEffect, useRef} from  'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import {Camera} from 'expo-camera';
import {useNavigation} from '@react-navigation/native'

export default function AbrirCamera(){
    const camRef = useRef(null)
    const [tipo, setTipo] = useState(Camera.Constants.Type.back);
    const [permissao, setPermissao] = useState(null);
    const navigation = useNavigation();

function Sair(){
    navigation.reset({
        index:0,
        routes:[{name: "Servicos"}] 
    })
}

async function takePicture(){
   if(camRef){
       const data = await camRef.current.takePictureAsync()
       console.log(data)
   } 
}

 useEffect(() => {
     (async() => {
         const {status} = await Camera.requestCameraPermissionsAsync();
         setPermissao(status === 'granted')
     })();
 },[])
    
 if (permissao === null){
     return<View/>;
 }
 if(permissao === false){
     return<Text>Acesso Negado</Text>
 }

    return<SafeAreaView style={estilos.container}>

        <Camera
            style={{flex:1}}
            type={tipo}
            ref={camRef}
        >
            <View style={estilos.containerBotao}>
                <View>
                  <TouchableOpacity style={estilos.fechar}  onPress={()=>Sair()}><FontAwesome name='close'style={estilos.iconFechar}/></TouchableOpacity>  
                </View>
                <View>
                   <TouchableOpacity style={estilos.foto}  onPress={takePicture}><FontAwesome name='camera'style={estilos.iconFoto}/></TouchableOpacity> 
                </View>
                
            </View>
            
        </Camera>
    </SafeAreaView>
}
const estilos = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    fechar:{
        position:"absolute",
        bottom: 40,
        left:20,
        width:150,
        height:50,
        borderRadius:15,
        alignItems:"center"

    }, 
    foto:{
        position:"absolute",
        bottom: 40,
        left:200,
        width:160,
        height:50,
        borderRadius:15,
        alignItems:"center"
    },
    containerBotao:{
        flex:1,
        backgroundColor:"transparent",
        flexDirection:"row",
        left:22
    },
    iconFoto:{
        fontSize:50,
        color:"#008000"
    },
    iconFechar:{
        fontSize:50,
        color:"#FF0000"
    },
   
   
})