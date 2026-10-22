import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import {Perfil} from '../components/Perfil'; 

/* 2.-Zona de la ejecución/main(Componenntes o Screens) */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>

      <Perfil 
      nombre="Karen Hernandez"
      carrera="ITTID" 
      materia="Desarrollo De Aplicaciones Moviles"
      cuatrimestre="4to Cuatrimestre"
      style={styles.tarjeta1}
      >
      </Perfil>
      <Perfil 
      nombre="Agustin Rivera"
      carrera="ISC" 
      materia="Desarrollo De Aplicaciones Moviles"
      cuatrimestre="4to Cuatrimestre"
      style={styles.tarjeta2}
      >
      </Perfil>
      <Perfil 
      nombre="Kevin Piña"
      carrera="ITC" 
      materia="Desarrollo De Aplicaciones Moviles"
      cuatrimestre="4to Cuatrimestre"
      style={styles.tarjeta3}
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
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
  },
  tarjeta1:{backgroundColor:'#bbaff3'},
  tarjeta2:{backgroundColor:'#FFD3B6'},
  tarjeta3:{backgroundColor:'#87dbef'},

});
