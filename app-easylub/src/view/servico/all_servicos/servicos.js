import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Text, SafeAreaView, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import api from '../../../servicos/api';


export default function Todos({navigation}) {
 const [nome, setNome] = useState(null)

 const servico = [
   {
    idServ: "5",
    codMaq:"SAP002",
    maq:"TRANSPORTADOR",
    linha: "L541",
    equip:"Mancal",
    trecho:"UIP-ECH",
    codLub:"SAP075",
    tipo:"Mineral",
    tipoLub:"Óleo",
    prop:"50W",
    dataApli: "06/04/2022",
    dataProxApli: "30/04/2022",
    status: "Em Execução",
    obs: "sendo execultado por fulano",
  },
   {
    idServ: "6",
    codMaq: "SAP010",
    maq:"TRANSPORTADOR",
    linha: "L501",
    equip: "Mancal",
    trecho: "PZ-ROT",
    codLub:"SAP036",
    tipo: "Cálcio",
    tipoLub: "Graxa",
    prop:"0",
    dataApli: "19/05/2022",
    dataProxApli: "11/05/2022",
    status: "Aguardando",
    obs:  "Teste Aguardando",
  },
   {
    idServ: "7",
    codMaq: "SAP020",
    maq:"TRANSPORTADOR",
    linha: "L503",
    equip:"Mancal",
    trecho: "UIP-ECH",
    codLub: "SAP083",
    tipo: "Sintético",
    tipoLub: "Spray",
    prop: "30W",
    dataApli: "05/05/2022",
    dataProxApli: "19/05/2022",
    status: "Aguardando",
    obs: "Teste Aguardando 1",
  },
 
 ]


 AsyncStorage.getItem("nome", (err, result) => {setNome(result); });



useEffect(()=>{
  fetch(`${api}/listar_servico`)
  .then(data => {
    return data.json()        
    })
    .then(data => {
      for(let arquivos of data.files){
           const servicos=
                [{
                  idServ : arquivos.idServ,
                  codMaq : arquivos.codMaq,
                  maq : arquivos.maq,
                  linha : arquivos.linha,
                  equip : arquivos.equip,
                  trecho : arquivos.trecho,
                  codLub : arquivos.codLub,
                  tipo : arquivos.tipo,
                  tipoLub : arquivos.tipoLub,
                  prop : arquivos.prop,
                  dataApli : arquivos.dataApli,
                  dataProxApli : arquivos.dataProxApli,
                  status: arquivos.status,
                  obs : arquivos.obs
                }]
      }  
      })
    
},[])


  return (
    <View style={estilo.container}>
      <FlatList 
      data ={servico}
      keyExtractor = {item=>item.idServ}
      renderItem = {({item}) =><Button onPress={()=>navigation.navigate('Meus Serviços', {
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
              })}><Text style={estilo.textLista}>Código da Máquina : {item.codMaq} </Text></Button>}
      />  
      
    </View>
  );
}
const estilo = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#D3D3D3"
  },
    modal:{
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#C0C0C0",
      marginTop:100,
      margin: 20,
      padding: 20,
      borderRadius:20,
      elevation:40
    },
    botãoVoltar:{
      width:120,
      height:30,
      borderRadius:20,
      marginTop: 40,
      backgroundColor:"#1E90FF",
      alignItems:"center",
      justifyContent:"center",
      marginHorizontal:10,
      borderWidth:1,
      borderColor:"#4F4F4F"
    },
    botãoSelecionar:{
      width:120,
      height:30,
      borderRadius:20,
      marginTop: 40,
      backgroundColor:"#228B22",
      alignItems:"center",
      justifyContent:"center",
      marginHorizontal:10,
      borderWidth:1,
      borderColor:"#4F4F4F"
    },
    textoBotao:{
      color:"#F0F8FF"
    },
    viewBotao:{
      flexDirection:"row",
      
    },
    textLista:{
      fontSize:16,
      padding: 25,
      borderBottomWidth:1,
      borderBottomColor:"#808080"
    },
  })


