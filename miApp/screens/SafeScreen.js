/* 1.- Zona de importaciones */
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeAreaEjemplo from '../components/SafeAreaEjemplo';
import ScrollViewEjemplo from '../components/ScrollViewEjemplo';


/* 2.-Zona de la ejecución/main(Componenntes o Screens) */
export default function SafeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
    <View style={styles.container}>
        <Text>Aqui Va la practica 10</Text>
        <Text>Equipo: Dulce</Text>
        <SafeAreaEjemplo/>
        <ScrollViewEjemplo/>

    </View>
    </SafeAreaView>
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
