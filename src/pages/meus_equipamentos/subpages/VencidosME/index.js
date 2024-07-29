import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

export function AvisoVencidoME({route, navigation}){

const { equipamentosVencidos } = route.params;

const getStatusColor = (status) => {
    switch (status) {
        case 'Vencido':
        return { backgroundColor: "#FF2F2F50", color: "#CBCBCB" }; //Vermelho
        case "Próx. Vencimento":
        return { backgroundColor: "#FFD70050", color: "#CBCBCB" }; // Amarelo
        default:
        return { backgroundColor: "#3B3E55", color: "#CBCBCB" }; //Calibrado
    }
    };

    return(
        <View style={styles.container}>
             <View style={styles.areaHeader}>
                    <TouchableOpacity style={styles.area_icon_voltar} onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../../../../assets/voltar.png")}  
                            style={styles.icon_voltar}
                        />
                    </TouchableOpacity>
                    <View style={styles.areaTituloTela}><Text style={styles.tituloTela}>AVISO</Text></View>
                </View>

                <View style={styles.areaTitulo}> 
                    <Text style={styles.titulo}>Os equipamentos abaixo estão vencidos ou próximos de seu vencimento:</Text>
                </View>
                <View style ={ styles.scrow }>
                <ScrollView  >
                    <View style ={ styles.areaTitulos }>
                        <View style = { styles.tituloDesc }><Text style = { styles.textTitulo}> Descrição </Text></View>
                        <View style = { styles.tituloTag }><Text style = { styles.textTitulo}> TAG </Text></View>
                        <View style = { styles.tituloStatus }><Text style = { styles.textTitulo}> Status </Text></View>
                    </View>
                    {equipamentosVencidos.map((item, index) => ( //mapeando itens para listar os vencidos
                    <View key={index} style={styles.areaLinhas}>
                        <View style = {[styles.listDesc, getStatusColor(item.status)]}><Text style = { styles.textList}> {item.desc} </Text></View>
                        <View style = {[styles.listTag, getStatusColor(item.status)]}><Text style = { styles.textList}> {item.tag} </Text></View>
                        <View style = {[styles.listStatus, getStatusColor(item.status) ]}><Text style = { styles.textList}> {item.status} </Text></View>
                    </View>
                ))}
                </ScrollView>
                </View>
                <View style={styles.area_icon_alert}>
                    <Image
                    source={require("../../../../assets/alert.png")}  
                    style={styles.icon_alert}
                    />
                </View>
                <View style={styles.areaTitulo}> 
                    <Text style={styles.titulo}>Estes equipamentos devem ser devolvidos ao laboratório o quanto antes!</Text>
                </View>

            <TouchableOpacity style={styles.areaBut} onPress={()=>navigation.goBack()}>
                <Text style={styles.textBut}> Voltar </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.butConfirm} onPress={()=>navigation.navigate('sucessTransferirME')}>
                <Text style={styles.textBut}> Continuar mesmo assim </Text>
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
        flexDirection: 'row', 
        width: 400    
    },
    areaTituloTela:{
        backgroundColor: '#1A1A24',
        width:280,
        alignContent: 'center',
        alignItems: 'center'
    },
    tituloTela:{
        alignItems: 'center',
        color: '#814EC0',
        fontSize: 28,
        marginTop:12,
        marginBottom: 20,
        },
    area_icon_voltar: {
        width: 44,
        height: 44,
        marginLeft:15,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    icon_voltar: {
        width: 44,
        height: 44,
        backgroundColor: '#1A1A24',
    },
    titulo: {
        color: '#CBCBCB',
        fontSize: 18,
        marginTop:12,
        marginBottom: 15,
        marginLeft:15,
        textAlign: 'center',
      },
      areaTitulo:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A1A24',
        width: 360,

      },
      areaBut:{
        padding:6,
        width:200,
        height: 40,
        marginTop: 20,
        marginBottom: 20,
        borderColor: '#762FCF',
        borderWidth:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#1A1A24',
        borderRadius:37
    },
    butConfirm:{
        padding:6,
        width:200,
        height:40,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#762FCF',
        borderRadius:37
    },
    textBut:{
        fontSize:15,
        color: '#CBCBCB',
      },
    areaTitulos:{
        padding: 3,
        marginTop: 10,
        marginBottom: 3,
        flexDirection: 'row',
        width:350,
        justifyContent: 'space-between',
    },
    tituloDesc:{
        width:160,
        alignItems:'center',
        justifyContent: 'center',
    },
    tituloTag:{
        width:62,
        alignItems:'center',
        justifyContent: 'center',
    },
    tituloStatus:{
        width:100,
        alignItems:'center',
        justifyContent: 'center',
    },
    textTitulo:{
        fontSize:13,
        color: '#7B5AFC'
    },
    areaLinhas:{
        padding: 3,
        marginTop: 5,
        flexDirection: 'row',
        width:350,
        justifyContent: 'space-between'
    },
    listDesc:{
        padding:6,
        width:160,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#3B3E55',
        borderRadius:5
    },
    listTag:{
        width:62,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#3B3E55',
        borderRadius:5
    },
    listStatus:{
        width:100,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#3B3E55',
        borderRadius:5
    },
    textList:{
        fontSize:12,
        color: '#CBCBCB'
    },
    area_icon_alert: {
        width: 130,
        height: 130,
        marginTop: 0,
        marginRight:8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    icon_alert: {
        width: 130,
        height: 130,
        backgroundColor: '#1A1A24',
    },
    scrow:{
        backgroundColor: '#1C1E2E', 
        alignItems: 'center',
        width:360,
        height:150,
        borderRadius:10,
        marginBottom: 30,
        marginTop:5,
    }
})