import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Servicos from '../view/servico/index'
import Login from '../view/login/login'
import Camera from '../view/servico/acept_servicos/camera'

const Stack = createNativeStackNavigator();

export default function App_rotas(){
    return  <NavigationContainer> 
                <Stack.Navigator>
                    <Stack.Screen name="Login de Funcionário" component={Login}/>
                    <Stack.Screen name="Servicos" component={Servicos}
                    options={{
                        headerShown:false
                    }}
                    />
                    <Stack.Screen name="Camera" component={Camera}/>
                </Stack.Navigator>
            </NavigationContainer>
}