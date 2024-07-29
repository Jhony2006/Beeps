import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { ListaME } from "../../components/list_meus_equip"

export function MeusEquipamentos({navigation}){

let local = "Usina São Martinho"
let servico = "Comissionamento"
let dataUti = "10/05/24"
let dataDev = "15/05/24"

    return(
        <View style={styles.container}>
            <Text style={styles.Tela}>Meus Equipamentos</Text>
            <View style={styles.area_infoGerais}>
                <View style={styles.titulos}>
                    <View style={styles.titulo1}><Text style={styles.textTitulo}> Local </Text></View>
                    <View style={styles.titulo2}><Text style={styles.textTitulo}> Serviço </Text></View>
                    <TouchableOpacity style={styles.area_icon_alterar} onPress={()=> navigation.navigate('alteraDados')}>
                    <Image
                    source={require("../../assets/alterar.png")}  
                    style={styles.icon_alterar}
                    />
                    </TouchableOpacity>
                </View>
                <View style={styles.infos}>
                    <View style={styles.info1}><Text style={styles.textInfo}> {local} </Text></View>
                    <View style={styles.info2}><Text style={styles.textInfo}> {servico} </Text></View>
                </View>
                <View style={styles.titulos}>
                    <View style={styles.titulo1}><Text style={styles.textTitulo}> Data de Utilização </Text></View>
                    <View style={styles.titulo2}><Text style={styles.textTitulo}> Data de Devolução </Text></View>
                </View>
                <View style={styles.infos}>
                    <View style={styles.info1}><Text style={styles.textInfo}> {dataUti} </Text></View>
                    <View style={styles.info2}><Text style={styles.textInfo}> {dataDev} </Text></View>
                </View>
            </View>
            <ListaME navigation={navigation}/>
            <TouchableOpacity style={styles.areaBut} onPress={()=>navigation.navigate('devolucao')}>
                <Text style={styles.textBut}> Devolução </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.areaBut} onPress={()=>navigation.navigate('transferir')}>
                <Text style={styles.textBut}> Transferência </Text>
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
    Tela:{
        color: '#814EC0',
        fontSize: 30,
        marginTop:50,
        marginBottom: 20
        },
    area_infoGerais:{
        width: 360,
        backgroundColor: '#1C1E2E',
        borderRadius: 10,
        paddingBottom: 10,
        paddingTop:5,
    },
    titulos:{
        width: 300,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    titulo1:{
        width: 180,
        paddingLeft: 8,
        marginTop: 10
    },
    titulo2:{
        marginTop: 10
    },
    textTitulo:{
        fontSize: 16,
        color: '#7B5AFC',
    },
    infos:{
        width: 300,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    info1:{
        width: 180,
        paddingLeft: 8,
    },
    info2:{
        width: 120,
    },
    textInfo:{
        fontSize:13,
        color: '#CBCBCB',
        marginBottom: 5
    },
    area_icon_alterar: {
        width: 30,
        height: 30,
        marginLeft:83,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C2E41',
        borderRadius: 10,
      },
      icon_alterar: {
        width: 20,
        height: 20,
        backgroundColor: '#2C2E41',
      },
      areaBut:{
        padding:6,
        width:150,
        height: 40,
        marginBottom: 20,
        borderColor: '#762FCF',
        borderWidth:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#1A1A24',
        borderRadius:37
    },
    textBut:{
        fontSize:15,
        color: '#CBCBCB',
      },
})