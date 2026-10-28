/* 1.- Zona de importaciones */
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/* 2.-Zona de la ejecución/main(Componenntes o Screens) */
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <MenuScreen></MenuScreen>
      </View>
    </SafeAreaProvider>
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
