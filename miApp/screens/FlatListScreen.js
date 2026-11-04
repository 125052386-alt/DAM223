import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import PantallaTareas from "../components/PantallaTareas";
import PantallaContactos from "../components/PantallaContactos";

export default function FlatListScreen() {
  const [pantalla, setPantalla] = useState("tareas");

  return (
    <View style={styles.contenedor}>
      <View style={styles.fila}>
        <Button title="FlatList" onPress={() => setPantalla("tareas")} />
        <Button title="SectionList" onPress={() => setPantalla("contactos")} />
      </View>
      {pantalla === "tareas" ? <PantallaTareas /> : <PantallaContactos />}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, paddingTop: 50, paddingHorizontal: 16 },
  pantalla: { flex: 1 },
  fila: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 6,
    padding: 8,
    marginTop: 8,
  },
  titulo: { fontSize: 22, fontWeight: "bold", paddingVertical: 12 },
  encabezado: {
    backgroundColor: "#eeeeee",
    padding: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  item: { padding: 14 },
  seleccionado: { backgroundColor: "#d0e8ff" },
  separador: { height: 1, backgroundColor: "#cccccc" },
  pie: { padding: 8, color: "#666666" },
  vacio: { padding: 16, textAlign: "center" },
});

