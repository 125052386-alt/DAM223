import {Text, View, StyleSheet} from 'react-native'

export const EncabezadoCafeteria=()=>{
    return (
        <View style={styles.encabezado}>
             <Text style={styles.encabezado}>Encabezado Cafeteria</Text>
             <Text>Bienvenido A Coffe Shop</Text>
        </View>

    );
}
const styles=StyleSheet.create({
    encabezado:{
        flex:1,
        fontSize:20,
        color:'#53321f'
    }
})