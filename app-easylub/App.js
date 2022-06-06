import React from 'react'
import { SafeAreaView } from 'react-native';


import AppRotas from './src/rotas/app_rotas'


export default function App() { 
 console.disableYellowBox = true;
  return(
    
    <SafeAreaView style={{flex: 1}}>
      <AppRotas/>
    </SafeAreaView>
  );
}
