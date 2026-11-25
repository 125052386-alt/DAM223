import {Stack} from "expo-router";

export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="detalle"
                options={{title:'Detalles Usuarios'
            }}
            />
            <Stack.Screen
                name="actualiza"
                options={{title:'Actualiza Usuarios'
            }}
            />

        </Stack>
    );

}