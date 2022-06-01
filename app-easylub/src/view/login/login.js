import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet, Animated} from 'react-native'

import Logo from  './componentes_login/Logo';
import Inputs from "./componentes_login/inputs";

export default function Login(){
    const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
    const [opacity] = useState(new Animated.Value(0));

     useEffect(()=>{

    Animated.parallel([
      Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness:20,
      useNativeDriver:true
      }),
    Animated.timing(opacity,{
      toValue: 1,
      duration: 200,
      useNativeDriver:true
    })
    ]).start();
    
  }, []);

    return<KeyboardAvoidingView style={estilos.backgound}>
        <Animated.View style={[ estilos.container, { opacity : opacity, transform: [{translateY: offset.y}] }]}>
            <Logo/>
            <Inputs/>
        </Animated.View>
    </KeyboardAvoidingView>
}
const estilos = StyleSheet.create({
backgound:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor : '#191919'

},
container:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  width: '90%',
},
})