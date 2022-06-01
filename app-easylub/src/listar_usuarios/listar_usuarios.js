import react from "react";
import { View } from "react-native";

import api from '../servicos/api'



export default function Listar(){
    function Busca(){
        api.get('/listar').then(
            response => {
                console.log(response.data)
            }
        )
    }

    return<View></View>
}