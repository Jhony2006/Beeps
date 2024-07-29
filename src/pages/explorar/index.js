import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ListaExplore } from '../../components/list_explorer'

export function Explorar({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.Tela}>Explorar</Text>
            <View style={styles.area_titulo}> 
                <Text style={styles.titulo}>Buscar equipamentos</Text>
            </View>
            <ListaExplore navigation={navigation}/>
            <TouchableOpacity style={styles.butSE} onPress={() => navigation.navigate('selectEquipament')}>
                <Text style={styles.textBut}> Solicitar Equipamentos</Text>
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
    area_titulo:{
        width:360,
    },
    butSE:{
        padding:6,
        width:206,
        height:40,
        marginTop: 50,
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
      titulo: {
        color: '#CBCBCB',
        fontSize: 20,
        marginTop:12,
        marginBottom: 20,
        marginLeft:15
      }
})