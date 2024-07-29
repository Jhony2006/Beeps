import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export function SucessExplore ({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.areaHeader}>
                    <View style={styles.area_icon_delta}>
                        <Image
                            source={require("../../../../assets/delta.png")}  
                            style={styles.icon_delta}
                        />
                    </View>
                    <View style={styles.areaTituloTela}><Text style={styles.tituloTela}>Beeps</Text></View>
            </View>
            <View style={styles.area_icon_check}>
                <Image
                source={require("../../../../assets/check.png")}  
                style={styles.icon_check}
                />
            </View>
            <View style={styles.areaTitulo}>
                    <Text style={styles.titulo}>Solicitação enviada</Text>
                    <Text style={styles.titulo}>com Sucesso!</Text>
            </View>
            <TouchableOpacity style={styles.butOK}  onPress={() => navigation.navigate('explore')}>
                <Text style={styles.textBut}> Voltar </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor: '#1A1A24', 
        alignItems: 'center',
        
    },
    areaHeader:{
        marginTop:17,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', 
        width: 400    
    },
    areaTituloTela:{
        backgroundColor: '#1A1A24',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tituloTela:{
        color: '#814EC0',
        fontSize: 40,
        },
    area_icon_delta: {
        width: 30,
        height: 30,
        marginTop: 5,
        marginRight:8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A1A24',
        borderRadius: 10,
    },
    icon_delta: {
        width: 40,
        height: 40,
        backgroundColor: '#1A1A24',
    },
    area_icon_check: {
        width: 250,
        height: 250,
        backgroundColor: '#1A1A24',
        marginTop: 130,
        marginBottom: 30,
        marginRight:8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon_check: {
        width: 250,
        height: 250,
        backgroundColor: '#1A1A24',
    },
    titulo: {
        color: '#CBCBCB',
        fontSize: 28,
        marginLeft:15
      },
      areaTitulo:{
        alignItems: 'center',
        backgroundColor: '#1A1A24',
        width: 300,
      },
      butOK:{
        padding:6,
        width:206,
        height:40,
        marginTop: 70,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#762FCF',
        borderRadius:37
        },
        textBut:{
        fontSize:15,
        color: '#CBCBCB',
    },
})

