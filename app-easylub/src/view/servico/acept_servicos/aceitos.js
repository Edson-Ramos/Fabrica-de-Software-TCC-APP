import React, {useState, useEffect} from 'react';
import { View,Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import Select from 'react-native-picker-select';
import {useNavigation} from '@react-navigation/native'

 

export default function Meus_servicos({route}) {
  const navigation = useNavigation();

  function irCamera(){
    navigation.reset({
        index:0,
        routes:[{name: "Camera"}] 
    })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>ID:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.id}</Text>
      </View>{/*View Input*/}
    </View>{/*View Geral */}

    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>Cód. Máq:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.codMaq}</Text>
      </View>{/*View Input*/}
    </View>{/*View Geral */}

    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>Máquina:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.maq}</Text>
      </View>{/*View Input*/}
    </View>{/*View Geral */}

    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>Linha:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.linha}</Text>
      </View>{/*View Input*/}
    </View>{/*View Geral */}

    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>Equipamento:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.equip}</Text>
      </View>{/*View Input*/}
    </View>{/*View Geral */}

    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>Trecho:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.trecho}</Text>
      </View>{/*View Input*/}
    </View>{/*View Geral */}

    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>Cód. Lubri.:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.codLub}</Text>
      </View>{/*View Input*/}
    </View>{/*View Geral */}

    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>Tipo:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.tipo}</Text>
      </View>{/*View Input*/}
    </View>{/*View Geral */}

    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>Tipo Lub.:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.tipoLub}</Text>
      </View>{/*View Input*/}
    </View>{/*View Geral */}

    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>Propriedade:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.prop}</Text>
      </View>{/*View Input*/}
    </View>{/*View Geral */}

    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>Data Apli.:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.dataApli}</Text>
      </View>{/*View Input*/}
    </View>{/*View Geral */}

    <View style={estilos.viewGeral}>
      <View style={estilos.viewLabel}>
        <Text>Data Prox. Apli.:</Text>
      </View>{/*View Label */}
      <View style={estilos.viewInput}>
        <Text style={estilos.textOutput}>{route.params.dataProxApli}</Text>  
      </View>{/*View Input*/}
    </View>{/*View Geral */}
      
      <View style={estilos.select}>
        <Select             
          onValueChange={(value) =>console.log(value)}
          items = {[
            {label: 'Finalizado', value: 'finalizado'},
            {label: 'Aguardando', value: 'aguardando'},
          ]}
        />
      </View>

      <View>
        <TextInput multiline={true} textBreakStrategy={'balanced'} style={estilos.obsInput} >{route.params.obs}</TextInput>
      </View>
      <View style={estilos.viewBotao}>
        <TouchableOpacity style={estilos.botãoSalvar}><Text style={estilos.textoBotao} >Salvar</Text></TouchableOpacity>
        <TouchableOpacity style={estilos.botãoFoto} onPress={()=>irCamera()}><Text style={estilos.textoBotao}>Foto</Text></TouchableOpacity>      
      </View>
     
  </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center"
  },
   botãoFoto:{
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
    botãoSalvar:{
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
    select:{
      justifyContent:"center",
      marginVertical:10,
      width:200,
      height:40,
      borderWidth:1,
      borderRadius:5,
      backgroundColor:"#DCDCDC"
    },
    obsInput:{
      borderWidth:1,
      borderColor: "#000000",
      width:300,
      height:100,
      borderRadius:5,      
      backgroundColor:"#DCDCDC"
    },
    textOutput:{
      width:150,
      height:25,
      borderWidth:1,
      borderRadius:5,
      backgroundColor:"#DCDCDC",
      marginVertical:3,
      textAlign:"center",
      alignItems:"center",
    },
    viewGeral:{
      flexDirection:"row",
      marginVertical:1,
      
    },
    viewLabel:{
      width:100,
      flexDirection:"row",
      alignItems:"center",
      marginHorizontal:4,
      right:50

      
    },
    viewInput:{
      right:47

    }
})

