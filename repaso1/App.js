import { StyleSheet, View, Text} from 'react-native';
import RegistroEUScreen from './screens/RegistroEUScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Button } from 'react-native';

/* 2.-Zona de la ejecución/main(Componenntes o Screens) */
export default function App() {

  const [screen,setscreen]=useState('menu')
  switch(screen){
    case 'registro':
      return <SafeAreaProvider><RegistroEUScreen/>
              </SafeAreaProvider>
    case 'menu':
      default:
        return (
          <SafeAreaProvider>
            <View style={styles.container}>
              <Text>Presiona Para Iniciar Tu Registro</Text>
              <Button title='Registrate' onPress={()=>setscreen('registro')}></Button>
            </View>
          </SafeAreaProvider>
        );
  }

}


/* 3.-Zona de estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fec3eb',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center',
  },
  titulo:{
    fontFamily:'Roboto',
    fontStyle:'black',
    color:'#5a33f6'
  },
  boton:{
    padding:20,
    borderColor:'#6b1df2',
    borderRadius:10,
    color:'white',
    fontWeight:'bold'
  }
});
