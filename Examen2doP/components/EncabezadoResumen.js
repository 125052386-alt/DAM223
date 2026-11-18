import {Text, View, StyleSheet} from 'react-native'

export const EncabezadoResumen=()=>{
    return (
        <View style={styles.resumen}>
             <Text style={styles.resumen}>Resumen de selección</Text>
        </View>

    );
}
const styles=StyleSheet.create({
    resumen:{
        flex:1,
        fontSize:20,
        color:'#53321f'
    }
})