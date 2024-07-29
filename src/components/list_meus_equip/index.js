import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import MeusEquip from "./itens"


export function ListaME ({navigation}){

    const getStatusColor = (status) => {
    switch (status) {
        case "Vencido":
        return { backgroundColor: "#FF2F2F50", color: "#CBCBCB" }; //Vermelho
        case "Próx. Vencimento":
        return { backgroundColor: "#FFD70050", color: "#CBCBCB" }; // Amarelo
        default:
        return { backgroundColor: "#3B3E55", color: "#CBCBCB" }; //Calibrado
    }
    };

    const handleItemPress = (item) => {
        // Navegue para a tela de detalhes e passe os parâmetros necessários
        navigation.navigate('detalhesME', { itemId: item } );
    };

    return(
        <View style = {styles.areaLista}>
            <View style ={ styles.areaTitulos }>
                <View style = { styles.tituloDesc }><Text style = { styles.textTitulo}> Descrição </Text></View>
                <View style = { styles.tituloTag }><Text style = { styles.textTitulo}> TAG </Text></View>
                <View style = { styles.tituloStatus }><Text style = { styles.textTitulo}> Status </Text></View>
            </View>
            <FlatList
                data = {MeusEquip}
                keyExtractor={item=>item.tag}
                renderItem={({item}) => 
                    <TouchableOpacity style={styles.areaLinhas} onPress={() => handleItemPress(item.tag)}>
                        <View style = {[styles.listDesc, getStatusColor(item.status)]}><Text style = { styles.textList}> {item.desc} </Text></View>
                        <View style = {[styles.listTag, getStatusColor(item.status)]}><Text style = { styles.textList}> {item.tag} </Text></View>
                        <View style = {[styles.listStatus, getStatusColor(item.status) ]}><Text style = { styles.textList}> {item.status} </Text></View>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    areaLista:{
        marginTop:20,
        marginBottom: 40,
        backgroundColor: '#1C1E2E', 
        alignItems: 'center',
        width:360,
        height:260,
        borderRadius:10,
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

})