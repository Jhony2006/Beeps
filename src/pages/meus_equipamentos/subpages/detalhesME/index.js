import { View, Text, StyleSheet, Linking, TouchableOpacity, Image} from 'react-native';
import MeusEquip from '../../../../components/list_meus_equip/itens'

export function DetalhesEquipsME ({route, navigation}){

    const { itemId } = route.params;

    const searchDados = (item) => {
        // Encontra o equipamento com a tag especificada
        const equipamento = MeusEquip.find(equip => equip.tag === item);
        
        // Se o equipamento for encontrado, retorna a descrição e o status; caso contrário, retorna valores vazios
        return {
            tag: item,
            desc: equipamento ? equipamento.desc : '',
            status: equipamento ? equipamento.status : '',
            serial: equipamento ? equipamento.serial : '',
            model: equipamento ? equipamento.model : '',
            venc: equipamento ? equipamento.venc : '',
            image: equipamento ? equipamento.image: '',
        };
    };
    const equipamentoDados = searchDados(itemId);
    // Mapeamento de imagens
    const images = {
        'image_mg': require('../../../../assets/megohmetro.png'),
        'image_mm': require('../../../../assets/micro.png'),
        'image_spd': require('../../../../assets/soprador.png'),
        'image_ttr': require('../../../../assets/ttr.png'),
        'image_tqm': require('../../../../assets/tqm.png'),
        'image_asp': require('../../../../assets/asp.png'),
        'image_jcc': require('../../../../assets/jcc.png'),
        'image_mtt': require('../../../../assets/mtt.png'),
        'image_amp': require('../../../../assets/amp.png'),
        // Adicione mais imagens conforme necessário
    };
    return(
        <View style={styles.container}> 
            <View style={styles.areaHeader}>
                {/* O  onPress={() => navigation.goBack() faz voltar uma stack*/}
                <TouchableOpacity style={styles.area_icon_voltar} onPress={() => navigation.goBack()}> 
                    <Image
                        source={require("../../../../assets/voltar.png")}  
                        style={styles.icon_voltar}
                    />
                </TouchableOpacity>
                <View style={styles.areaTituloTela}><Text style={styles.tituloTela}>Meus Equipamentos</Text></View>
            </View>
            <View style={styles.area_image_equip}> 
                    <Image
                        source={images[equipamentoDados.image]}  
                        style={styles.image_equip}
                    />
            </View>
            <View style={styles.areaTitulo}> 
                <Text style={styles.titulo}>Informações Técnicas:</Text>
            </View>
            <View style={styles.area_infoGerais}>
                <View style={styles.titulos}>
                    <View style={styles.titulo1}><Text style={styles.textTitulo}> Descrição </Text></View>
                    <View style={styles.titulo2}><Text style={styles.textTitulo}> TAG </Text></View>
                </View>
                <View style={styles.infos}>
                    <View style={styles.info1}><Text style={styles.textInfo}> {equipamentoDados.desc} </Text></View>
                    <View style={styles.info2}><Text style={styles.textInfo}> {equipamentoDados.tag} </Text></View>
                </View>
                <View style={styles.titulos}>
                    <View style={styles.titulo1}><Text style={styles.textTitulo}> Nº de Série </Text></View>
                    <View style={styles.titulo2}><Text style={styles.textTitulo}> Modelo </Text></View>
                </View>
                <View style={styles.infos}>
                    <View style={styles.info1}><Text style={styles.textInfo}> {equipamentoDados.serial} </Text></View>
                    <View style={styles.info2}><Text style={styles.textInfo}> {equipamentoDados.model} </Text></View>
                </View>
                <View style={styles.titulos}>
                    <View style={styles.titulo1}><Text style={styles.textTitulo}> Status </Text></View>
                    <View style={styles.titulo2}><Text style={styles.textTitulo}> Vencimento </Text></View>
                </View>
                <View style={styles.infos}>
                    <View style={styles.info1}><Text style={styles.textInfo}> {equipamentoDados.status} </Text></View>
                    <View style={styles.info2}><Text style={styles.textInfo}> {equipamentoDados.venc} </Text></View>
                </View>
            </View>
            <TouchableOpacity style={styles.butArea} onPress={() => Linking.openURL("https://drive.google.com/file/d/11i-pYb1Fxtu5f1HiYSt4sg9EajZ62fmx/view?usp=sharing")}>
                <Text style={styles.textBut}> Cert. de Calibração </Text>
                <Image
                        source={require("../../../../assets/cert.png")}  
                        style={styles.icon_but}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.butArea} onPress={() => Linking.openURL("https://dam-assets.fluke.com/s3fs-public/302_303_umpor0100.pdf")}> 
                <Text style={styles.textBut}> Manual de Operação </Text>
                <Image
                        source={require("../../../../assets/manual.png")}  
                        style={styles.icon_but}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.butArea} onPress={()=>navigation.navigate('relatarDefeito')}> 
                <Text style={styles.textBut}> Relatar Defeito </Text>
                <Image
                        source={require("../../../../assets/relat.png")}  
                        style={styles.icon_but}
                />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex:1,
        backgroundColor: '#1A1A24', 
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
    area_infoGerais:{
        width: 360,
        backgroundColor: '#1C1E2E',
        marginBottom: 25,
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
        fontSize:15,
        color: '#CBCBCB',
        marginBottom: 5
    },
    titulo: {
        color: '#CBCBCB',
        fontSize: 20,
        marginTop:12,
        marginLeft:15
      },
      areaTitulo:{
        backgroundColor: '#1A1A24',
        width: 360,
        marginBottom: 15,
      },
      butArea:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:6,
        paddingRight: 15,
        paddingLeft: 10,
        width:206,
        height:40,
        marginBottom: 15,
        borderColor: '#762FCF',
        borderWidth:1,
        alignItems:'center',
        backgroundColor: '#1A1A24',
        borderRadius:37
    },
      textBut:{
        fontSize:15,
        color: '#CBCBCB',
      },
      icon_but: {
        width: 20,
        height: 20,
        backgroundColor: '#1A1A24',
    },
    area_image_equip:{
        backgroundColor: '#1C1E2E',
        borderRadius: 500,
        width: 150,
        height:150,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    image_equip:{
        width: 164,
        height:164,

    }
})