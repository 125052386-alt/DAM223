/* 1.- Zona de importaciones */
import { StyleSheet, View, Text, ScrollView, TextInput, Alert, Switch, Button, Platform} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';


const mostrarAlerta=(titulo, mensaje)=>{
  if(Platform.OS==='web'){
    window.alert(`${titulo} \n\n ${mensaje}`);
  } 
  else{
    Alert.alert(titulo, mensaje)
  }
}

/* 2.-Zona de la ejecución/main(Componenntes o Screens) */
export default function RegistroEUScreen() {
  const[nombre,setnombre]=useState('');
  const[carrera,setcarrera]=useState('');
  const[semestre,setsemestre]=useState('');

  const[taller,settaller]=useState(false);
  const[constancia,setconstancia]=useState(false);
  const[actividades,setactividades]=useState(false);



  const resgistro=()=>{
    const faltantes=[];
    var Staller='';
    var Sconstancia='';
    var Sactividades='';

    if(nombre.trim()===''){
      faltantes.push('Nombre');
    }
    if(carrera.trim()===''){
      faltantes.push('Carrera');
    }
    if(semestre.trim()===''){
      faltantes.push('Semestre');
    }
    if (faltantes.length>0){
      mostrarAlerta('Campos Incompletos','Debes llenar los campos: '+faltantes.join('\n'));
      return;
    }
    if(isNaN(semestre)){
      mostrarAlerta('Error','El semestre debe ser un numero');
      return;
    }
    if(taller===true)
    {
      Staller='Si';
    }
    else{
      Staller='No';
    }
    if(constancia===true)
    {
      Sconstancia='Si';
    }
    else{
      Sconstancia='No';
    }
    if(actividades===true)
    {
      Sactividades='Si';
    }
    else{
      Sactividades='No';
    }
  mostrarAlerta('Registro Enviado \n',`\n Nombre: ${nombre} \n Carrera: ${carrera} \n Semestre: ${semestre} \n Taller: ${Staller} \n Constnacia: ${Sconstancia} \n Deportes: ${Sactividades}`);
    setnombre('');
    setcarrera('');
    setsemestre('');

  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.container}>
          <Text style={styles.titulo}>Registro De Evento Universitario</Text>
          <TextInput
          style={styles.input}
          placeholder='Ingresa tu Nombre'
          value={nombre}
          onChangeText={setnombre}
          />
          <TextInput
          style={styles.input}
          placeholder='Ingresa Tu carrera'
          value={carrera}
          onChangeText={setcarrera}
          />
          <TextInput
          style={styles.input}
          placeholder='Ingresa tu Semestre'
          value={semestre}
          onChangeText={setsemestre}
          />

          <Text style={styles.texto} >¿Asistira Al taller?</Text>
          <Switch
            value={taller}
            onValueChange={(valor) => settaller(valor)}
          />
          <Text style={styles.texto} >¿Requiere Constancia?</Text>
          <Switch
            value={constancia}
            onValueChange={(valor) => setconstancia(valor)}
          />
          <Text style={styles.texto} >¿Participara en deporte?</Text>
          <Switch
            value={actividades}
            onValueChange={(valor) => setactividades(valor)}
          />
          <Button title="Registrar" onPress={resgistro}/>  
      </View>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f8b9fa',
    justifyContent:'center',
    padding:20,
    width:'100%',
    alignItems:'center',
  },
  input:{
    borderWidth:1,
    borderColor:'#b745ec',
    borderRadius:8,
    padding:18,
    marginBottom:3,
    width:'70%',

  },
  titulo:{
    fontSize:28,
    fontFamily:'Roboto',
    fontWeight:'black',
    color:'#5a33f6',
    padding:18,
  },
  texto:{
    padding:10,
    fontWeight:'semibold',
  }
})