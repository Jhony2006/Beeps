import { View, Text, StyleSheet, Image} from 'react-native'

export function Scaner (){
    let qrValue = "TTR-007";
    return(
        <View style = { styles.container}>
            <Text style={styles.Tela}> Scanear </Text>
            <View style={ styles.areaLeitor }>
                {/* COLOCAR CAMERA PARA LEITURA DE QR CODE */}
            </View>
            <View style = { styles.areaInfo }>
                <Text style = { styles.textInfo}> Aponte para o QR Code do </Text>
                <Text style = { styles.textInfo}>  Equipamento </Text>
            </View>
            <View style = { styles.areaUltimo }>
                <Text style = { styles.textUltimo }> Último Scan: </Text>
                <Text style = { styles.textUltimo }> {qrValue} </Text>
            </View>
            <View style = { styles.areaButons }>
                <View style={styles.areaBut1}>
                    <Text style={styles.textBut}> Adicionar Outro </Text>
                </View>
                <View style={styles.areaBut2}>
                    <Text style={styles.textBut}> Próximo </Text>
                </View>
            </View>
        </View>
    )   
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor: '#1A1A24', 
        alignItems: 'center',
    },
    Tela:{
        color: '#814EC0',
        fontSize: 30,
        marginTop:50,
        marginBottom: 20
    },
    areaLeitor:{
        marginTop: 50,
        width: 200,
        height: 200,
        backgroundColor: '#3B3E55'
    },
    areaInfo:{
        marginTop:5,
        width:200,
        alignItems: 'center',
    },
    textInfo:{
        color: '#CBCBCB',
        fontSize: 14
    },
    areaUltimo:{
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1C1E2E',
        padding: 10,
        paddingLeft:15,
        paddingRight:15,
        borderRadius: 10
    },
    textUltimo:{
        color: '#CBCBCB',
        fontSize: 14
    },
    areaButons:{
        flexDirection: 'row',
        width: 340,
        justifyContent: 'space-between',
        marginTop: 80
    },
    areaBut1:{
        padding:6,
        width:150,
        height: 50,
        borderColor: '#762FCF',
        borderWidth:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#1A1A24',
        borderRadius:37
    },
    areaBut2:{
        padding:6,
        width:150,
        height: 50,
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