import {Tabs} from 'expo-router'
import {Ionicons} from '@expo/vector-icons'

export default function TabsLayout(){
    return(

        <Tabs>
            <Tabs.Screen
            name="index"
            options={{title:"Inicio", href:null}}
            >
            </Tabs.Screen>

            <Tabs.Screen
            name="alta"
            options={{
                title:"Alta Usuarios",
                tabBarIcon:({color,size})=>(<Ionicons name="person-add" size={15} color={"red"}/>)
            }}
            >
            </Tabs.Screen>


            <Tabs.Screen
            name="consulta"
            options={{title:"Consulta",
                tabBarIcon:({color,size})=>(<Ionicons name="list" size={15} color={"red"}/>)
            }}
            >
            </Tabs.Screen>

        </Tabs>
    )
}