import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Todos from './all_servicos/servicos'
import Meus_servicos from './acept_servicos/aceitos'



const Tab = createBottomTabNavigator();

export default function Servicos() {
  return (
    <Tab.Navigator
      initialRouteName="Todos"
      screenOptions={{
        tabBarActiveTintColor: '#0000FF',
      }}
    >
      <Tab.Screen
        name = "Todos Serviços"
        component={Todos}
        options={{
             headerStyle:{
              backgroundColor:"#1E90FF"
            },    
          tabBarLabel: "Todos Serviços",
          tabBarStyle:{
            color:"#000000",
            backgroundColor:"#1E90FF"
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wrench" color={"#000000"} size={size} />
          ),
          tabBarLabelStyle:{
            color: "#000000"
          }
        }}
      />
      
      <Tab.Screen
        name="Meus Serviços"
        component={Meus_servicos}
        options={{
          headerStyle:{
              backgroundColor:"#1E90FF"
            },   
          tabBarLabel: 'Meus Servicos',
          tabBarStyle:{
            backgroundColor:"#1E90FF"
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-wrench" color={"#000000"} size={size} />
          ),
          tabBarLabelStyle:{
            color: "#000000"
          }
        }}
      />
    </Tab.Navigator>
  );
}