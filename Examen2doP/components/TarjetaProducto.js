import { useState } from 'react';
import {Text, View, Pressable, Alert, Platform, StyleSheet} from 'react-native';

const mostrarAlerta=(titulo, mensaje)=>{
  if(Platform.OS==='web'){
    window.alert(`${titulo} \n\n ${mensaje}`);
  } 
  else{
    Alert.alert(titulo, mensaje)
  }
}

export const TarjetaProducto =({nombre, descripcion, precio, style})=>{
    const verproducto = () => {
        mostrarAlerta('Producto',`Nombre:${nombre} \n Descripcion:${descripcion} \n Precio:${precio}`);

    };

    return (
        <View style={[estilos.tarjeta]}>
            <Text styles={estilos.tarjetas}>{nombre}</Text>
            <Text styles={estilos.tarjetas}>{descripcion}</Text>
            <Text styles={estilos.tarjetas}>{precio}</Text>
            <Pressable
            style={estilos.press}
            onPress={verproducto}>
            <Text>Ver Producto</Text>
            </Pressable>
        </View>


    );

};
const estilos = StyleSheet.create({
    tarjeta:{
        margin:10,
        Padding: 20,
        marginBottom: 20,
    },
    tarjetas:{
        borderColor:"#5e240c",
        backgroundColor:"#d3a160",
        borderRadius:12,

    },
    press:{
        backgroundColor:'#d4a3419e'
    }

});