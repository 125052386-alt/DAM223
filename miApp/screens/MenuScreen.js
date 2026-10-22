/* 1.- Zona de importaciones */
import { StyleSheet, View, Button, Text } from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import ActivityScrenn from './ActivityScreen';
import InputScreen from './InputScreen';
import FlatListScreen from './FlatListScreen';
import ImageScreen from './ImageScreen';
import ModalScreen from './ModalScreen';

/* 2.-Zona de la ejecución/main(Componenntes o Screens) */
export default function MenuScreen() {

    const [screen, setScreen]= useState('menu');

    switch(screen){
        case 'safe':
            return<SafeScreen/>
        case 'pressable':
            return<PressableScreen/>
        case 'input':
            return<InputScreen/>
        case 'flatlist':
            return<FlatListScreen/>
        case 'image':
            return<ImageScreen/>
        case 'modal':
            return<ModalScreen/>
        case 'activity':
            return<ActivityScrenn/>
        case 'tarjetas':
        return<TarjetasScreen/>
        case 'menu':
            default:
                return (

                    <View style={styles.container}>
                        <Text>Menu de Practicas</Text>
                        <Button title='Practica Tarjetas' onPress={ ()=>setScreen('tarjetas')} ></Button>
                        <Button title='Practica SafeAreaView' onPress={  ()=>setScreen('safe')} ></Button>
                        <Button title='Practica Pressable' onPress={  ()=>setScreen('pressable')} ></Button>
                        <Button title='Practica TextInput' onPress={  ()=>setScreen('input')} ></Button>
                        <Button title='Practica FlatList' onPress={  ()=>setScreen('flatlist')} ></Button>
                        <Button title='Practica ImageBackgroung' onPress={  ()=>setScreen('image')} ></Button>
                        <Button title='Practica Modal & Button' onPress={  ()=>setScreen('modal')} ></Button>
                        <Button title='Practica ActivityIndicator' onPress={  ()=>setScreen('activity')} ></Button>

                    </View>
                );
    }//switch
}//Function


/* 3.-Zona de estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center',
    gap:10,
  },


});
