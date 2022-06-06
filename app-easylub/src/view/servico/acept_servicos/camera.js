import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { Camera } from "expo-camera"
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';



export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [hasPermission, setHasPermission] = useState(null)
  const [open, setOpen] = useState(false);
  const [checkPicture, setCheckPicture] = useState(null)
  const [photo, setPhoto] = useState(null)
  const camRef = useRef(null);
  const navigation = useNavigation();




  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      setHasPermission(status === 'granted');
    })();

    (async()=>{
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
    })();

  }, []);


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePicture() {
    if (camRef) {

      const data = await camRef.current.takePictureAsync();
      //boa pratica para saber oque uma função assincrona retorna,chamar
      //console log. Nesse caso retorna um objeto,neste caso um desses 
      //objeto e uir, por isso fica data.uir
      setCheckPicture(data.uri);
      setOpen(true)
    }
  }

  async function salvePicture() {
    const assent = await MediaLibrary.createAssetAsync(checkPicture)
       .then(() => {

        alert("Salvo com sucesso")
        setOpen(false)

      })
      .catch((error) => {

        alert(error.code)

      })
  }

 
  function Sair(){
    navigation.reset({
        index:0,
        routes:[{name: "Servicos"}] 
    })
}

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar hidden={true} />

      <Camera
        type={type}
        style={styles.preview}
        ref={camRef}
      >
        </Camera>
      <View style={{flexDirection: "row", position:"absolute", bottom:70, left:50}}>

      <TouchableOpacity style={{marginLeft:30,}}  onPress={()=>Sair()}><FontAwesome name='close' size={50} color="#FF0000"/></TouchableOpacity> 

      <TouchableOpacity style={{marginLeft:130}}  onPress={takePicture} ><FontAwesome name="camera" size={50} color="#0000FF" /></TouchableOpacity>
    </View>
      {open &&

        <Modal visible={open} animationType="slide" transparent={false}  >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20, flexDirection:"row" }} >
            <View style={{ flexDirection:"row", position:"absolute", left: 70, bottom:60}}>
            <TouchableOpacity style={{marginHorizontal:50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
              onPress={() => setOpen(false)} >
              {/* se deixar so setOpen vai sempre chamar a função assim o modal não abre*/}
              <FontAwesome name="window-close" size={50} color="red" />

            </TouchableOpacity>
            

            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center' }}
              onPress={salvePicture}
            >

              <FontAwesome name="upload" size={50} color="black" />

            </TouchableOpacity>
          </View>

            <Image source={{ uri: checkPicture }}

              style={{ width: '100%', height: 300, borderRadius: 20 }}

            />
            {/*propriedade padrão do source é 
          source={{uir:"link"}} ou source={require('link')} 
          por isso fica dessa forma acima */}

          </View>

        </Modal>

      }

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  preview: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    width: '40%',
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
    iconFechar:{
        fontSize:50,
        color:"#FF0000"
    },



});
