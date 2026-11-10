import { useState } from 'react';
import { StyleSheet, Text, View, Switch, Pressable } from 'react-native';
import {Tarjeta} from './components/Tarjeta'

export default function App() {
  return(
    <View style={styles.container}>
      <Tarjeta
      nombre="Karen"
      carrera="TIID"
      style={styles.tarjeta1}
      >
      </Tarjeta>
      <Tarjeta
      nombre="Karen"
      carrera="TIID"
      style={styles.tarjeta2}
      >
      </Tarjeta>
    </View>
  );


};

const styles = StyleSheet.create({
  tarjeta2:{
    backgroundColor: '#9b4949',
  },

  container: {
    flex: 1, 
    flexDirection:'column',
    justifyContent: 'flex-start', 
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
