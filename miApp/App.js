/* 1.- Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import {Perfil} from './components/Perfil'; 

/* 2.-Zona de la ejecución/main(Componenntes o Screens) */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={require('./assets/wave.png')}/> 
      <Saludo></Saludo>
      <StatusBar style="auto" />
      <Saludo2></Saludo2>
      <Perfil 
      nombre="Karen Hernandez"
      carrera="ITTID" 
      materia="Desarrollo De Aplicaciones Moviles"
      cuatrimestre="4to Cuatrimestre"
      >
      </Perfil>
    </View>
  );
}


/* 3.-Zona de estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
