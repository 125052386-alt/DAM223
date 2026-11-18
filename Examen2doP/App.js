import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Switch, SectionList} from 'react-native';
import { EncabezadoCafeteria } from './components/EncabezadoCafeteria';
import { EncabezadoPersonalizar } from './components/EncabezadoPersonalizar';
import { EncabezadoResumen } from './components/EncabezadoResumen';
import {TarjetaProducto} from './components/TarjetaProducto'

export default function App() {

  const [cafe, setCafe] = useState(false);
  const [hamburguesa, setHamburguesa] = useState(false);
  const [sandwich, setSandwich] = useState(false);
  const [busqueda, setBusqueda] = useState();
  const [productos, setProductos] = useState([]);

  const alternarProductos = (id) =>
    setProductos((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((f) => f !== id)
        : [...anteriores],
    );

  const secciones = productos.map((s) =>({
    ...s,
    data: s.data.filter((c) =>
      c.nombre.toLowerCase().includes(busqueda.toLowerCase()),
    ),
  })).filter((s) => s.data.length > 0);

  var contador=0;
  if(cafe===true){
    contador++;
  }
  if(hamburguesa===true){
    contador++;
  }

  if(sandwich===true){
    contador++;
  }



  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Antojo Express!!</Text>
      <View>
        <EncabezadoCafeteria></EncabezadoCafeteria>
      </View>
      <View>
        <TarjetaProducto
        nombre="cafe"
        descripcion="Un cafe Hecho de grano Fino"
        precio="$80"></TarjetaProducto>

        <TarjetaProducto
        nombre="Hamburguesa"
        descripcion="Con queso,Lechuga y Tomate"
        precio="$120"></TarjetaProducto>

        <TarjetaProducto
        nombre="Sandwiche"
        descripcion="Con lechuga, Tomate, Pollo"
        precio="$90"></TarjetaProducto>
      </View>

      {/* Estacion 2 */}


      <View>
        <SectionList
        sections={secciones}
        keyExtractor={(item) => item.id}
        extraData={productos}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => alternarProductos(item.id)}
            style={styles.item}
          >
            <Text>
              {productos.includes(item.id) ? "★ " : "☆ "}
              {item.nombre} . {item.descripcion}
            </Text>
            </Pressable>

        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.encabezado}>{section.title}</Text>
        )}
        
        SectionSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderSectionFooter={({ section }) => (
        <Text style={styles.pie}>{section.data.length} productos(s) totales:</Text>
        )}
        stickySectionHeadersEnabled
        >
          <Text style={styles.texto}>Personaliza tu pedido</Text>

        </SectionList>
      <View>
      </View>  
      <View>
        <EncabezadoPersonalizar/>
        {/* Switch cafe americano */}
          <View>
            <Text>Café Americano</Text>
            <Switch
              value={cafe}
              onValueChange={(valor) => setCafe(valor)}
            />
            <Text>
              {cafe ? 'Seleccionado' : 'No seleccionado'}
            </Text>
          </View>
          {/* Switch hamburguesa */}
          <View>
            <Text>Hamburguesa Clasica</Text>
            <Switch
              value={hamburguesa}
              onValueChange={(valor) => setHamburguesa(valor)}
            />
            <Text>
              {hamburguesa ? 'Seleccionado' : 'No seleccionado'}
            </Text>
          </View>
          {/* Switch Sandwich */}
          <View>
            <Text>Sandwich Club</Text>
            <Switch
              value={sandwich}
              onValueChange={(valor) => setSandwich(valor)}
            />
            <Text>
              {sandwich ? 'Seleccionado' : 'No seleccionado'}
            </Text>
          </View>
      </View>
      {/* Resumen */}
      <View>
        <EncabezadoResumen/>
      </View>
        <View>
          <Text>Total productos seleccionados: {contador}</Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    padding:10,
    fontSize:40,
    color:'#a15858',
  },
  title:{
    fontSize:30,
    color: '#a15858',
  },
  encabezado:{
    fontSize: 35,
  },
});
