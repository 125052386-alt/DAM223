import { useState } from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";


export default function ScrollViewEjemplo()
{
    const [desplazar, setdesplazar]=useState(true)
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Ejemplo de scroll</Text>
            <Button
                title={desplazar ? 'desactivar desplazamiento': 'activar desplazamiento'}
                onPress={()=> setdesplazar(!desplazar)}
            />
            <ScrollView
            style={style.lista}
            contentContainerStyle={style.contenido}
            showsVerticalScrollIndicator={true}
            scrollEnabled={desplazar}
            >
                <View style={style.tarjeta1}><Text>Tarjeta 1</Text></View>
                <View style={style.tarjeta2}><Text>Tarjeta 2</Text></View>
                <View style={style.tarjeta3}><Text>Tarjeta 3</Text></View>
                <View style={style.tarjeta4}><Text>Tarjeta 4</Text></View>
                <View style={style.tarjeta5}><Text>Tarjeta 5</Text></View>
            </ScrollView>
        </View>

    );

}
/* Zona estilo */
const style=StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: '#9285f4'
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom:10,
    },
    lista:{
        height:200,
        flexGrow:0,
        marginTop:10,
    },
    contenido:{
        paddingBottom:20,    
    },
    tarjeta1:{backgroundColor:'#ffc4c4', padding:25, marginBottom:10, borderRadius:8},
    tarjeta2:{backgroundColor:'#fab9ea', padding:25, marginBottom:10, borderRadius:8},
    tarjeta3:{backgroundColor:'#efc4ff', padding:25, marginBottom:10, borderRadius:8},
    tarjeta4:{backgroundColor:'#c4cdff', padding:25, marginBottom:10, borderRadius:8},
    tarjeta5:{backgroundColor:'#ddffc4', padding:25, marginBottom:10, borderRadius:8},
    
})