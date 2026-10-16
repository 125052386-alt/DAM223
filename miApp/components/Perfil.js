import { useState } from 'react';
import {Text, View, Button} from 'react-native';

export const Perfil =({nombre, carrera, materia, cuatrimestre})=>{
    const[mostrar, setMostar] = useState(false);

    return(
        <View>
            <Text>------------------------------------------------------------------------</Text>
            <Text>{nombre}</Text>

            { mostrar && 
            <>
            <Text>{carrera}</Text>
            <Text>{materia}</Text>  
            <Text>{cuatrimestre}</Text>
            </> 
            }
            <Button title='ver perfil' onPress={ ()=>setMostar(!mostrar) }></Button>
            <Text>------------------------------------------------------------------------</Text>
        </View>
    )
}