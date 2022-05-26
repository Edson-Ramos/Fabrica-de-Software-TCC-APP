import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

export default function Inputs(){
    return<>
    <TextInput
              style={estilos.input}
              placeholder="Email"
              autoCorrect={false}
              onChangeText={()=>{}}
            />
    <TextInput
              style={estilos.input}
              placeholder="Senha"
              autoCorrect={false}
              onChangeText={()=>{}}
             />
    </>
}

const estilos = StyleSheet.create({
    input:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
})