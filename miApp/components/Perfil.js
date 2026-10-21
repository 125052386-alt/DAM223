import { useState } from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';


export const Perfil =({nombre, carrera, materia, cuatrimestre, style})=>{
    const[mostrar, setMostar] = useState(false);

    return(
        <View style={[estilos.tarjeta,style]}>
            <Text>----------------------------------------------------------------</Text>
            <Text style={estilos.nombres}>{nombre}</Text>

            { mostrar && 
            <>
            <Text style={estilos.carrera}>{carrera}</Text>
            <Text style={estilos.otroTexto}>{materia}</Text>  
            <Text style={estilos.otroTexto}>{cuatrimestre}</Text>
            </> 
            }
            <Button title='ver perfil' onPress={ ()=>setMostar(!mostrar)}></Button>
            <Text>-----------------------------------------------------------------</Text>
        </View>
    )
}
const estilos=StyleSheet.create({
    nombres:{
        fontSize:24,
        fontWeight:600,
        textTransform:'uppercase',

    }, 
    carrera:{
        fontSize:20,
        fontFamily:'Roboto',
        color:'purple'
    },
    otroTexto:{
        fontSize:18,
        fontFamily:'Courier',
        color:'blue',
        fontStyle:'italic'
    },
    tarjeta:{
        borderWidth:2,
        borderRadius:20,
        padding:12,
        margin:12,
    },

});
