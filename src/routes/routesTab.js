import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../pages/home'
import { Explorar } from '../pages/explorar' // importe a página e o componente
import { MeusEquipamentos } from '../pages/meus_equipamentos'
import { Scaner } from '../pages/scaner'
import { Perfil } from '../pages/perfil'
import { Image, StyleSheet, View } from 'react-native';
import RoutesStackExplore from './routesStack_Explore'
import RoutesStackME from './routesStack_MeusEquip'


const Tab = createBottomTabNavigator(); // inicializa navegação

export function RoutesTab(){
    return(
        <Tab.Navigator>
            {/* ***************** INÍCIO TAB 1 ******************* */}
            <Tab.Screen 
                name = "home" // nome da aba
                component={Home} // componente importado - página
                options={{ 
                    tabBarHideOnKeyboard: true, //esconde a tab bar quando abre o teclado
                    headerShown: false, //Remove header (cabeçalho)
                    tabBarLabel: () => null, // remove rótulos dos ícones
                    tabBarStyle: { 
                        height:55, // define altura da tab bar
                        backgroundColor: '#1A1A24', // define cor do background da tab bar
                     },
                    tabBarIcon: ({ focused, size, color}) => { // configura ícone
                        if( focused ){ // Se ícone em foco
                            return <View style={styles.area_icon}>
                            <Image
                            source={require("../assets/home-active.png")} //chama ícone com cor
                            style={styles.icon_home}
                           /> 
                           </View>
                        } //Se não
                        return <View style={styles.area_icon}> 
                        <Image
                        source={require("../assets/home-inactive.png")} // chama ícone vazado/ sem cor
                        style={styles.icon_home}
                       /> 
                       </View>
                    }
                }}
            />
            {/* ***************** FINAL TAB 1 ******************* */}
            {/* ***************** INÍCIO TAB 2 ******************* */}
            <Tab.Screen
                name = "explorar"
                component={RoutesStackExplore}
                options={{ 
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarStyle: { 
                        height:55,
                        backgroundColor: '#1A1A24',
                     },
                    tabBarIcon: ({ focused, size, color}) => {
                        if( focused ){
                            return <View style={styles.area_icon}>
                            <Image
                            source={require("../assets/explore-active.png")}
                            style={styles.icon_explore}
                           /> 
                           </View>
                        }
                        return <View style={styles.area_icon}>
                        <Image
                        source={require("../assets/explore-inactive.png")}
                        style={styles.icon_explore}
                       /> 
                       </View>
                    }
                }}
                
            />
            {/* ***************** FINAL TAB 2 ******************* */}
            {/* ***************** INÍCIO TAB 3 ******************* */}
            <Tab.Screen
                name = "meusEquip"
                component={RoutesStackME}
                options={{ 
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarStyle: { 
                        height:55,
                        backgroundColor: '#1A1A24',
                     },
                    tabBarIcon: ({ focused, size, color}) => {
                        if( focused ){
                            return <View style={styles.area_icon}>
                            <Image
                            source={require("../assets/me-active.png")}
                            style={styles.icon_meus_equip}
                           /> 
                           </View>
                        }
                        return <View style={styles.area_icon}>
                        <Image
                        source={require("../assets/me-inactive.png")}
                        style={styles.icon_meus_equip}
                       /> 
                       </View>
                    }
                }}
            />
            {/* ***************** FINAL TAB 3 ******************* */}
            {/* ***************** INÍCIO TAB 4 ******************* */}
            <Tab.Screen
                name = "scaner"
                component={Scaner}
                options={{ 
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarStyle: { 
                        height:55,
                        backgroundColor: '#1A1A24',
                     },
                    tabBarIcon: ({ focused, size, color}) => {
                        if( focused ){
                            return <View style={styles.area_icon}>
                            <Image
                            source={require("../assets/qr-active.png")}
                            style={styles.icon_scaner}
                           /> 
                           </View>
                        }
                        return <View style={styles.area_icon}>
                        <Image
                        source={require("../assets/qr-inactive.png")}
                        style={styles.icon_scaner}
                       /> 
                       </View>
                    }
                }}
            />
            {/* ***************** FINAL TAB 4 ******************* */}
            {/* ***************** INÍCIO TAB 5 ******************* */}
            <Tab.Screen
                name = "perfil"
                component={Perfil}
                options={{ 
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarStyle: { 
                        height:55,
                        backgroundColor: '#1A1A24',
                     },
                    tabBarIcon: ({ focused, size, color}) => {
                        if( focused ){
                            return <View style={styles.area_icon}>
                            <Image
                            source={require("../assets/perfil-active.png")}
                            style={styles.icon_perfil}
                           /> 
                           </View>
                        }
                        return <View style={styles.area_icon}>
                        <Image
                        source={require("../assets/perfil-inactive.png")}
                        style={styles.icon_perfil}
                       /> 
                       </View>
                    }
                }}
            />
            {/* ***************** FINAL TAB 5 ******************* */}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    area_icon:{
        width: 42,
        height: 39,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A1A24',
        borderRadius: 10,
      },
    icon_home: {
        width: 35,
        height: 35,
        borderRadius: 10,
      },
    icon_explore:{
        width:30,
        height:30,
        borderRadius: 10,
      },
    icon_meus_equip:{
        width:30,
        height:30,
        borderRadius: 10,
      },
    icon_scaner:{
        width:26,
        height:26,
        borderRadius: 0,
      },
      icon_perfil:{
        width:26,
        height:26,
        borderRadius: 0,
      },

})