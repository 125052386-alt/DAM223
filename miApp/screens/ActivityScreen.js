/* 1.- Zona de importaciones */
import { StyleSheet, View, Text, Switch, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform, Button} from 'react-native';
import {useState} from 'react'


/* 2.-Zona de la ejecución/main(Componenntes o Screens) */
export default function ActivityScreen() {
  const [cargando,setcargando]=useState(false);
  const [esGrande, setEsGrande]=useState(false);
  const [cambiarColor,setcambiarColor]=useState(false);

  const handleEnviar= () =>{
    setcargando(true);
    setTimeout(() => setcargando(false), 4000);
  }
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={20}
    style={styles.container}
    >

      <TextInput
      placeholder='Escribe algo....'
      style={styles.input}
      /> 
      <View style={styles.actionContainer}>
        {cargando ? (
          <ActivityIndicator
          size={esGrande ? 'large' : 'small'}
          color={cambiarColor ? '#e301f4' : '#ddacff'}
          />
        ): (
          <Button
          title='Enviar'
          onPress={handleEnviar}
          />
        )}
      </View>
      <View style={styles.SwitchBox}>
        <View style={styles.switchRow}>
          <Text style={styles.switchText}>Hacer Mas Grande</Text>
          <Switch
          value={esGrande}
          onValueChange={setEsGrande}
          />
        </View>
          <View style={styles.switchRow}>
          <Text style={styles.switchText}>Cambiar Color</Text>
          <Switch
          value={cambiarColor}
          onValueChange={setcambiarColor}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}


/* 3.-Zona de estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end',
    padding:20,
    backgroundColor:'#ffff'
  },
  input:{
    borderWidth:1,
    borderColor:'#7e1c96',
    padding:10,
    borderRadius:8,
    marginBottom:20,
    backgroundColor:'#eea8ff'
  },
  actionContainer:{
    height:40,
    justifyContent:'center',
    marginBottom:20,
  },
  SwitchBox:{
    borderWidth:1,
    borderColor:'#af47ff',
    borderRadius:8,
    padding:15,
    backgroundColor:'#d8b1f6'
  },
  switchRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:15,
  },
  switchText:{
    fontSize:16,
  },
});
