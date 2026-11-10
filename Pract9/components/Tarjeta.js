import { useState } from 'react';
import {Text, View, Pressable, Alert, Platform, StyleSheet } from 'react-native';

const mostrarAlerta=(titulo, mensaje)=>{
  if(Platform.OS==='web'){
    window.alert(`${titulo} \n\n ${mensaje}`);
  } 
  else{
    Alert.alert(titulo, mensaje)
  }
}

export const Tarjeta =({nombre, carrera, style})=>{
    const ver = () => {
        mostrarAlerta('datos',`Nombre:${nombre} \n carrera:${carrera} `);

    };

    return (
        <View style={[estilos.tarjeta,style]}>

            <Pressable
            onPress={ver}>
            <Text>Ver datos</Text>
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
});
