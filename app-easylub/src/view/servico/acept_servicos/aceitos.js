import React, {useState, useEffect} from 'react';
import { View,Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Select from 'react-native-picker-select';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'
import api from '../../../servicos/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

 


export default function Meus_servicos({route}) {
  const navigation = useNavigation();
  const[checkPicture, setCheckPicture] = useState("")
  const [obs, setObs] = useState("")
  const [nome, setNome] = useState(null)

  
    AsyncStorage.getItem("nome", (err, result) => {setNome(result); });


 async function searhPicture(){
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,    
    base64: true
  },);
    //callback estta relacionado uma função anonima e retorna
    //algum parametro
       if(result.cancelled){
         alert('Cancelado')
       }else{
          setCheckPicture(result)       

       }

  }
 
  function irCamera(){
    navigation.reset({
        index:0,
        routes:[{name: "Camera"}] 
    })
  }

  function salvar(){
    const dados_servicos = {
            idServ : route.params.id,
            codMaq : route.params.codMaq,
            maq : route.params.maq,
            linha : route.params.linha,
            trecho : route.params.trecho,
            equip : route.params.equip,
            tipoLub : route.params.tipoLub,
            codLub : route.params.codLub,
            tipo : route.params.tipo,
            prop : route.params.prop,
            dataApli :route.params.dataApli,
            dataProxApli : route.params.dataProxApli,
            status : status,
            obs : obs,
            nome_tec: nome,
            img : checkPicture.base64
        }
        if(checkPicture == ""){
           return alert("Selecione Uma Imagem")
        }
        if (status == ""){
          alert("Preencha o Status")
        }
        fetch(`${api}/atualizar_servico_app`,
            {
                method: "POST",
                body:JSON.stringify(dados_servicos),
                headers:{
                    "Content-Type" : "application/json"
                }
            })
            .then((resposta) => {
                if (resposta.status == 200)
                    return alert("Atualizado com Sucesso!")
                else
                    return alert("Erro Ao Atulizar")
            })
  }
if(route.params === undefined){
  return<View style={{flex:1, alignItems:"center", backgroundColor:"#242425" }}><Text style={{fontSize:28, color:"#C0C0C0", marginTop:300}}>Área Vazia</Text></View>
}
 const [status, setStatus] = useState(route.params.status)
  return(
    
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#242425" }}>
      
      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>ID:</Text>
        </View>{/*View Label */}
        <View style={estilos.viewInput}>
          <Text style={estilos.textOutput}>{route.params.id}</Text>
        </View>{/*View Input*/}
      </View>{/*View Geral */}

      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>Cód. Máq:</Text>
        </View>{/*View Label */}
        <View  style={estilos.viewInput}>
          <Text style={estilos.textOutput}>{route.params.codMaq}</Text>
        </View>{/*View Input*/}
      </View>{/*View Geral */}

      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>Máquina:</Text>
        </View>{/*View Label */}
        <View style={estilos.viewInput}>
          <Text style={estilos.textOutput}>{route.params.maq}</Text>
        </View>{/*View Input*/}
      </View>{/*View Geral */}

      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>Linha:</Text>
        </View>{/*View Label */}
        <View style={estilos.viewInput}>
          <Text style={estilos.textOutput}>{route.params.linha}</Text>
        </View>{/*View Input*/}
      </View>{/*View Geral */}

      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>Equipamento:</Text>
        </View>{/*View Label */}
        <View style={estilos.viewInput}>
          <Text style={estilos.textOutput}>{route.params.equip}</Text>
        </View>{/*View Input*/}
      </View>{/*View Geral */}

      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>Trecho:</Text>
        </View>{/*View Label */}
        <View style={estilos.viewInput}>
          <Text style={estilos.textOutput}>{route.params.trecho}</Text>
        </View>{/*View Input*/}
      </View>{/*View Geral */}

      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>Cód. Lubri.:</Text>
        </View>{/*View Label */}
        <View style={estilos.viewInput}>
          <Text style={estilos.textOutput}>{route.params.codLub}</Text>
        </View>{/*View Input*/}
      </View>{/*View Geral */}

      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>Tipo:</Text>
        </View>{/*View Label */}
        <View style={estilos.viewInput}>
          <Text style={estilos.textOutput}>{route.params.tipo}</Text>
        </View>{/*View Input*/}
      </View>{/*View Geral */}

      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>Tipo Lub.:</Text>
        </View>{/*View Label */}
        <View style={estilos.viewInput}>
          <Text style={estilos.textOutput}>{route.params.tipoLub}</Text>
        </View>{/*View Input*/}
      </View>{/*View Geral */}

      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>Propriedade:</Text>
        </View>{/*View Label */}
        <View style={estilos.viewInput}>
          <Text style={estilos.textOutput}>{route.params.prop}</Text>
        </View>{/*View Input*/}
      </View>{/*View Geral */}

      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>Data Apli.:</Text>
        </View>{/*View Label */}
        <View style={estilos.viewInput}>
          <Text style={estilos.textOutput}>{route.params.dataApli}</Text>
        </View>{/*View Input*/}
      </View>{/*View Geral */}

      <View style={estilos.viewGeral}>
        <View style={estilos.viewLabel}>
          <Text style={{color:"#C0C0C0"}}>Data Prox. Apli.:</Text>
        </View>{/*View Label */}
        <View style={estilos.viewInput}>
          <Text style={estilos.textOutput} >{route.params.dataProxApli}</Text>  
        </View>{/*View Input*/}
      </View>{/*View Geral */}
        
        <View style={estilos.select}>
          <Select             
            onValueChange={(value) =>setStatus(value)}
            items = {[
              {label: 'Concluído', value: 'Concluido'},
              {label: 'Aguardando', value: 'Aguardando'},
            ]}
          />
        </View>

        <View>
          <TextInput multiline={true} textBreakStrategy={'balanced'} style={estilos.obsInput} onChangeText={(text) =>setObs(text)} >{route.params.obs}</TextInput>
        </View>
        <View style={estilos.viewBotao}>
          <TouchableOpacity style={estilos.botãocarregar} onPress={searhPicture}
                title="Select Image"><Text style={estilos.textoBotao} >Carregar Imagem</Text></TouchableOpacity>

          <TouchableOpacity style={estilos.botãoSalvar} onPress={salvar}><Text style={estilos.textoBotao} >Salvar</Text></TouchableOpacity>
          <TouchableOpacity style={estilos.botãoFoto} onPress={()=>irCamera()}><Text style={estilos.textoBotao}>Foto</Text></TouchableOpacity>      
        </View>
       
    </View>
  )
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
     botãocarregar:{
       width:120,
      height:30,
      borderRadius:20,
      marginTop: 40,
      backgroundColor:"#B22222",
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
      backgroundColor:"#A9A9A9"
    },
    obsInput:{
      borderWidth:1,
      borderColor: "#000000",
      width:300,
      height:100,
      borderRadius:5,      
      backgroundColor:"#A9A9A9"
    },
    textOutput:{
      width:150,
      height:25,
      borderWidth:1,
      borderRadius:5,
      backgroundColor:"#A9A9A9",
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
      color:"#C0C0C0",
      flexDirection:"row",
      alignItems:"center",
      marginHorizontal:4,
      right:50

      
    },
    viewInput:{
      right:47

    },
   
})

