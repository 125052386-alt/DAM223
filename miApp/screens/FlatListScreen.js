/* 1.- Zona de importaciones */
import { StyleSheet, View, Text} from 'react-native';

/* 2.-Zona de la ejecución/main(Componenntes o Screens) */
export default function FlatListScreen() {
  return (
    <View style={styles.container}>

        <Text>Aqui Va la practica 13</Text>
        <Text>Equipo: Natalia</Text>
      
    </View>
  );
}


/* 3.-Zona de estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center',
  },

});
