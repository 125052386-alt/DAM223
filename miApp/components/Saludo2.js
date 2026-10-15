import {View,Button,Image,Text} from 'react-native';

export const Saludo2 = ()=>{
    return(
        <View>
            <Text>Hola React Native desde un componente Compuesto</Text>
            <Image source={require('../assets/wave.png')}/>
            <Button title="Presiona Para saludar" />
        </View>
    )
}
