import { useState, useEffect} from 'react' //importar use state e use effect
import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity} from 'react-native' //importes
import Equipaments from './itens' // importar itens (dados da array)


export function ListaExplore({navigation}){
    
    const [list, setList] = useState(Equipaments);    //para dinamizar os resultados da lista
    const [searchText, setSearchText] = useState(''); // para monitoramento e manipulação do texto digitado
    
    const handleItemPress = (item) => {
    // Navegue para a tela de detalhes e passe os parâmetros necessários
    navigation.navigate('detalheEquipExplore', { itemId: item } );
    };

    useEffect(()=>{
        if(searchText === ''){ //se texto digitado for vazio
            setList(Equipaments); // então retorna a lista completa sem filtros
        }else{ // se não
            setList( //os resultados mostrados serão:
                Equipaments.filter((item)=>( //declaro o filtro - função
                item.desc.toLowerCase().indexOf (searchText.toLowerCase()) > -1 || //se a descrição do item conter em sua string algo igual ao digitado OU
                item.tag.toLowerCase().indexOf (searchText.toLowerCase()) > -1 ||  //se a tag do item conter em sua string algo igual ao digitado OU
                item.local.toLowerCase().indexOf (searchText.toLowerCase()) > -1)) //se o local do item conter em sua string algo igual ao digitado então retorna verdadeiro e seta a amostragem
            );
        }
    }, [searchText]); // "escuta" o que é digitado

    return(
        <View style={styles.container}>
            <View style={styles.area_busca}>
                <TextInput
                    style={styles.text_busca} 
                    placeholder="Digite a descrição, tag ou local" //caixa de entrada de texto
                    placeholderTextColor="#888"
                    value={searchText}
                    onChangeText={(t) => setSearchText(t)} //o que for digitado é mandado para "setSearchText" mudando o valor de searchText
                />
                <Image
                    source={require("../../assets/explore-inactive.png")} //imagem buscar
                    style={styles.icon_busca}
                />
            </View>
            <View style={styles.areaLista}>
                <View style={styles.titulosLista}>
                    <View style={styles.tituloDesc}><Text style={styles.textTitulos}> Descrição </Text></View>
                    <View style={styles.tituloTag}><Text style={styles.textTitulos}> TAG </Text></View>
                    <View style={styles.tituloLocal}><Text style={styles.textTitulos}> Localização </Text></View>
                </View>
                <FlatList //inicia a lista
                    data={list} //De onde estão vindo os dados
                    keyExtractor={item=>item.tag} // Setar um dado que NÃO se repete entre os itens -"id"
                    renderItem={({item})=> ( // amostragem da lista
                    <TouchableOpacity style={styles.areaLinhas} onPress={() => handleItemPress(item.tag)}>
                        <View style={styles.areaDesc}><Text style={styles.Infotext}> {item.desc} </Text></View>
                        <View style={styles.areaTag}><Text style={styles.Infotext}> {item.tag} </Text></View>
                        <View style={styles.areaLocal}><Text style={styles.Infotext}> {item.local} </Text></View>
                    </TouchableOpacity>
                    )
                }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1A1A24', 
        alignItems: 'center',
    },
    areaLista:{
        marginTop:32,
        backgroundColor: '#1C1E2E', 
        alignItems: 'center',
        width:360,
        height:300,
        borderRadius:10,
    },
    titulosLista:{
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
    tituloLocal:{
        width:100,
        alignItems:'center',
        justifyContent: 'center',
    },
    textTitulos:{
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
    areaDesc:{
        padding:6,
        width:160,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#3B3E55',
        borderRadius:5
    },
    areaTag:{
        width:62,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#3B3E55',
        borderRadius:5
    },
    areaLocal:{
        width:100,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#3B3E55',
        borderRadius:5
    },
    Infotext:{
        fontSize:12,
        color: '#CBCBCB'
    },
    area_busca:{
        flexDirection: 'row',
        width:350,
        height:38,
        backgroundColor: '#2C2E41',
        borderRadius: 35,
        justifyContent:'space-between',
        alignItems: 'center',
        paddingRight:12,
      },
      text_busca:{
        fontSize: 12,
        color: '#CBCBCB',
        padding:8,
        marginLeft:10
      },
      icon_busca: {
        width: 17,
        height: 17,        
      },

})