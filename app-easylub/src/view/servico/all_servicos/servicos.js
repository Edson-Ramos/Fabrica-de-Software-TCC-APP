import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';


import { MaterialCommunityIcons} from '@expo/vector-icons'

import api from '../../../servicos/api';



export default function Todos({navigation}) {
 const [nome, setNome] = useState(null)
 const [dataSource, setDataSource] = useState(null)
 const [searchText, setSearchText] = useState("")
 AsyncStorage.getItem("nome", (err, result) => {setNome(result); });
 



useEffect(()=>{
  fetch(`${api}/listar_servico`)
  .then(data => {
    return data.json()        
    })
    .then(data => {  
          if(searchText === ""){
            setDataSource(data.files)
          }else{
            setDataSource(
              data.files.filter(item =>{
                if(item.status.toLowerCase().indexOf(searchText.toLocaleLowerCase())> -1){
                  return true;
                }else{
                  return false
                }
              })
            )
          }
      })
  
  
},[searchText])


  return (
    <View style={estilo.container}>
      <View style={estilo.searchArea}>
        <TextInput
        style={estilo.input}
        placeholder="Pesquise uma máquina"
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={(t) => setSearchText(t)}
        />        
      </View>

      <FlatList 
      data ={dataSource}
      keyExtractor = {item=>item.idServ}
      renderItem = {({item}) =>
      <TouchableOpacity style={estilo.botao}
      onPress={()=>navigation.navigate('Meus Serviços', {
         id: item.idServ,
         codMaq: item.codMaq,
          maq: item.maq,
          linha: item.linha,
          equip: item.equip,
          trecho: item.trecho,
          codLub: item.codLub,
          tipo: item.tipo,
          tipoLub: item.tipoLub,
          prop: item.prop,
          dataApli: item.dataApli,
          dataProxApli: item.dataProxApli,
          status: item.status,
          obs: item.obs
        })}>        
        <Image style={estilo.itemPhoto} source={require('../../../../assets/avatar.jpg')}/>
        <View style={estilo.itemInfo}>
          <Text style={estilo.itemP1}>Cód. da Máquina : {item.codMaq} </Text>
          <Text style={estilo.itemP2}>Status : {item.status} </Text>
        </View>
        </TouchableOpacity>
        }/>
    </View>
  );
}

const estilo = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#242425"
    },
    searchArea:{
      flexDirection: "row",
      alignItems:"center"
    },
     botao:{
      flexDirection:"row",
      marginLeft:30,
      marginRight:30,
      borderBottomWidth:1,
      borderBottomColor:'#444',
      paddingTop: 15,
      paddingBottom:15
    },
    itemInfo:{
      marginLeft:20,
    },
    itemPhoto:{
      width: 50,
      height:50,
      borderRadius:30
    },
    itemP1:{
      fontSize: 22,
      color:"#C0C0C0",
      marginBottom: 5,
    },
    itemP2:{
      fontSize:18,
      color:"#999999"
    },
    input:{
      flex:1,
      height:50,
      backgroundColor:"#363636",
      margin:30,
      borderRadius:5,
      fontSize:19,
      paddingLeft:15,
      paddingRight:15,
      color:"#FFFFFF"
    }
  
  })