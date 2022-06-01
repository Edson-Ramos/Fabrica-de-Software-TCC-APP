import React from 'react'
import {View, Image, StyleSheet } from 'react-native'

export default function Logo(){
    return<>
        <View style={estilos.containerLogo}>
              <Image style={estilos.logo} source={require('../../../../assets/icon-assets/engrenagem-verde.png')}/>               
        </View>
    </>
}

const estilos = StyleSheet.create({    
    containerLogo:{
        display:"flex",
        marginVertical:30,
        justifyContent: 'center',
    },
    logo:{
        width: 150,
        height:150
    }
})