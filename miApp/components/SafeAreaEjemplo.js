import { StyleSheet, Text, Button} from 'react-native';
import {use, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SafeAreaEjemplo(){
    const [mensaje, setMensaje]=useState('Bievenido a Nuestra Practica')
    return( 
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <Text style={styles.titulo}>Ejemplo de Safe Area</Text>
            <Text style={styles.mensaje}>{mensaje}</Text>
            <Button
                title="Cambiar mensaje"
                onPress={()=> setMensaje(mensaje==='Esta es nuestra practica'
                    ? 'hola': 'Esta es nuestra Practica'
                )}
            />
        </SafeAreaView>
    );
}

/*  Zona de estilos */

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#bbaff3',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    titulo:{
        fontSize: 20,
        fontWeight:10,
        marginBottom: 10,
    },
    mensaje:{
        fontSize: 16,
        marginBottom: 10,
    }
})