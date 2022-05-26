import React, {useState, useEffect} from 'react';
import {StyleSheet, KeyboardAvoidingView, Animated } from 'react-native';
import Botao from './src/componentes/Botao'
import Inputs from './src/componentes/inputs'
import Logo from './src/componentes/Logo'



export default function App() {
 

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

  return(
   
  <KeyboardAvoidingView style={styles.backgound}>
           
      <Animated.View style={[ styles.container, { opacity : opacity, transform: [{translateY: offset.y}] }]}>
      <Logo/> 
      <Inputs/>
    
      <Botao/>
        
      </Animated.View>
  </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
});
