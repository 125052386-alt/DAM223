import { useState } from 'react';
import { StyleSheet, Text, View, Switch, Pressable } from 'react-native';
import {Tarjeta} from './components/Tarjeta'

export default function App() {
  return(
    <View>
      <Tarjeta
      nombre="Karen"
      carrera="TIID"
      >
      </Tarjeta>
    </View>
  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  texto: {
    fontSize: 18,
    marginVertical: 15,
  },
  boton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
