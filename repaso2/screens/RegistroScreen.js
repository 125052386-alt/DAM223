import { StyleSheet, View, Text, Switch, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform, Pressable, Alert, Image, ImageBackground, FlatList} from 'react-native';
import {useState, useEffect} from 'react'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

    const mostrarAlerta=(titulo, mensaje)=>{
    if(Platform.OS==='web'){
        window.alert(`${titulo} \n\n ${mensaje}`);
    } 
    else{
        Alert.alert(titulo, mensaje)
    }
    }

export default function RegistroScreen() {
    //Formulario
    const [titulo,settitulo]=useState('');
    const [autor,setautor]=useState('');
    const [genero,setgenero]=useState('');

    const [libros, setLibros] = useState([]);

    const registrar = () =>{
        const faltantes=[];
        if (titulo.trim()===''){
            faltantes.push('Titulo del Libro')
        }
        if (autor.trim()===''){
            faltantes.push('Autor')
        }
        if (genero.trim()===''){
            faltantes.push('Genero')
        }
        if (faltantes.length>0){
            mostrarAlerta('faltan datos','completa \n'+faltantes.join(','));
            return;
        }
        
        const nuevoLibro = {
            titulo: titulo,
            autor: autor,
            genero: genero
        };

        setLibros([...libros, nuevoLibro]);

        mostrarAlerta('Libro Guardado correctamente',`\n Libro:${titulo}`);
        settitulo('');
        setautor('');
        setgenero('');
    }
    //Splash
    const[showsplash,setshowsplash]=useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setshowsplash(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);

    if (showsplash) {
      return (
          <View style={styles.container}>
            <Image 
              source={require('../assets/logo.png')} 
              style={styles.logo} 
            />
            <Text style={styles.splashTitle}>Repaso 2</Text>
          </View>
      );
    } 

    return(
        <ImageBackground
        source={require('../assets/main.jpg')}
        style={styles.mainContainer}
        resizeMode="cover"
        >
          <SafeAreaView>
            <View>
                <View style={styles.form}>
                    <Text style={styles.form}>Catalogo de Libros</Text>
                </View>
                <TextInput 
                style={styles.input}
                placeholder='Titulo del Libro'
                value={titulo}
                onChangeText={settitulo}
                />
                <TextInput
                style={styles.input}
                placeholder='Autor' 
                value={autor}
                onChangeText={setautor}
                />
                <TextInput
                style={styles.input}
                placeholder='Genero' 
                value={genero}
                onChangeText={setgenero}
                />
                <Pressable
                style={styles.boton}
                onPress={registrar}
                >
                   <Text style={styles.boton}>Agregar Libro</Text>
                </Pressable>
            </View>
            <View>
              <Text style={styles.lista}>Total De Libros{libros.length}</Text>
              <View>
                  <FlatList
                        data={libros}
                        renderItem={({item}) => (
                            <View style={styles.libros}>
                                <Text style={styles.titulo}>{item.titulo}</Text>
                                <Text style={styles.textoLibro}>Autor: {item.autor}</Text>
                                <Text style={styles.textoLibro}>Género: {item.genero}</Text>
                            </View>
                        )}
                  />
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
    );

}
//Zona de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.8,
    color: '#fff',
    alignItems: 'center',
  },
  input: {   
    borderColor: '#a595f5',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    color:'#292627',
    backgroundColor:'#d9d4f1',
    opacity: 0.8,

  },
  boton: {
    backgroundColor: '#c173d4',
    margin: 10,
    borderRadius: 5,
    color:'#ffff',
    textAlign:'center',
  },
  form:{
    alignItems:'center',
    color:'#e7dddd',
    flexDirection:'column',
    justifyContent:'flex-start',
    fontSize:30,
    padding:5,
  },
  libros:{
    backgroundColor:'#d9d4f1',
    margin:10,
    padding:10,
    opacity:0.8,
  },
  textoLibro:{
    color:'#221c1c',
    fontSize:16,
  },
  logo: {
    width: 200, 
    height: 200,
  },
  splashTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  titulo: {
    color:'#020202',
    fontSize: 19,
    fontWeight: 'bold',
  },
  lista:{
    alignItems:'center',
    color:'#f9f5f5',
    flexDirection:'column',
    justifyContent:'flex-start',
    fontSize:20,
    padding:5,

  }
})