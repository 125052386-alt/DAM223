/* 1.- Zona de importaciones */
import {  View, Text, TextInput, Button, Alert, Platform,StyleSheet} from 'react-native';
import { useState } from 'react';

const mostrarAlerta=(titulo, mensaje)=>{
  if(Platform.OS==='web'){
    window.alert(`${titulo} \n\n ${mensaje}`);
  } 
  else{
    Alert.alert(titulo, mensaje)
  }
}

/* 2.-Zona de la ejecución/main(Componenntes o Screens) */
export default function InputScreen() {

  const[nombre,setnombre]=useState('');
  const[correo,setcorreo]=useState('');
  const[telefono,settelefono]=useState('');


  const registrar=()=>{
    const faltantes =[];
    if(nombre.trim() ===''){
      faltantes.push('Nombre');
    }
    if(correo.trim() ===''){
      faltantes.push('Correo');
    }
    if(telefono.trim() ===''){
      faltantes.push('Telefono');
    }
    if(faltantes.length > 0){
      mostrarAlerta('Faltan datos','completa'+ faltantes.join(','));
      return;
    }
    if(!correo.includes('@')){
      mostrarAlerta('Correo Invalido','falta un @');
      return;
    }
    if(telefono.length!==10){
      mostrarAlerta('El telefono debe contener 10 digitos');
      return;
    }
    mostrarAlerta('Datos registrados correctamente',`Nombre:${nombre} \n Correo:${correo} \n telefono:${telefono}`);
    setnombre('');
    setcorreo('');
    settelefono('');
  };
  return (
    <View style={styles.contenedor}>

        <Text style={styles.titulo}>Registro de Datos</Text>
        <TextInput
        style={styles.input}
        placeholder='Nombre'
        value={nombre}
        onChangeText={setnombre}
        />
        <TextInput
        style={styles.input}
        placeholder='Correo'
        value={correo}
        onChangeText={setcorreo}
        keyboardType='email-address'
        autoCapitalize='none'
        />
        <TextInput
        style={styles.input}
        placeholder='Telefono'
        value={telefono}
        onChangeText={settelefono}
        keyboardType='numeric'
        maxLength={10}
        />
        <Button title="Registrar"
        onPress={registrar}/>  
    </View>
  );
}


/* 3.-Zona de estilos */
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent:'center',
    padding:20,
    maxWidth:400,
    width:'100%',
    alignSelf:'center'
  },
  titulo:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
  },
  input:{
    borderWidth:1,
    borderColor:'#d883ff',
    borderRadius:8,
    padding:10,
    marginBottom:2,
  }

});
