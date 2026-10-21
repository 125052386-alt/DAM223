import {View,Button,Image,Text} from 'react-native';
import{useState} from 'react';

export const Saludo2 = ()=>{
    const[saludo,setSaludo]=useState(false)

    return(
        <View>
            <Text>------------------------------------------------------------</Text>
            <Text>Hola React Native desde un componente Compuesto</Text>
            { saludo &&
            <>
            <Image source={require('../assets/wave.png')}/>
            </>
            }
            <Button title="Presiona Para saludar" onPress={ ()=>setSaludo(!saludo)} />
        </View>
    )
}
