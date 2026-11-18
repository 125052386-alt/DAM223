import {Text, View, StyleSheet} from 'react-native'

export const EncabezadoPersonalizar=()=>{
    return (
        <View style={styles.personalizar}>
             <Text style={styles.personalizar}>Personaliza tu pedido</Text>
        </View>

    );
}
const styles=StyleSheet.create({
    personalizar:{
        flex:1,
        fontSize:20,
        color:'#53321f'
    }
})