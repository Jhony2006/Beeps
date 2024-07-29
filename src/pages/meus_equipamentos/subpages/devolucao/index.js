import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MeusEquip from '../../../../components/list_meus_equip/itens'

export function DevolucaoME ({navigation}){

    const [equipmentList, setEquipmentList] = useState([]); // array para manipulação dos equipamentos selecionados
    const [ObsText, setObsText] = useState(''); // para monitoramento e manipulação do texto digitado

    const addLine = () => { // Adiciona uma linha para seleção de equipamento, isto é adiciona um objeto dentro do array equipamentList
        setEquipmentList([...equipmentList, { equipment: '' }]);
    };
    
    const deleteLine = (index) => { // Deleta uma linha já criada, isto é, exclui o objeto
        const updatedList = equipmentList.filter((_, i) => i !== index);
        setEquipmentList(updatedList);
    };
    
    const updateEquipment = (index, field, value) => { //adiciona valores (quantidade e descrição e ID - Index) dentro dos objetos do array equipamentList
        const updatedList = equipmentList.map((item, i) => {
        if (i === index) {
            return { ...item, [field]: value };
        }
        return item;
        });
        setEquipmentList(updatedList);
    };

    const handleLog = () => {  //Printa as informações do formulário no terminal
        let l = equipmentList.length;
        for(let i = 0; i < l; i++){
            console.log('ID:', i, 'Equipamento:', equipmentList[i].equipment);
            console.log('\n');
        }
        console.log(ObsText);
    };
    
    const handleConfirm = () => {
        const hasSelectedEquipment = equipmentList.some(item => item.equipment !== ''); // Verifica se pelo menos um equipamento foi selecionado
        let l = equipmentList.length;
        let repeat = false;
        let equipamentAnt=[];
        let equipamentAtu = '';

        for (let i = 0; i < l; i++){ // Verifica se repetiu algum valor mais de uma vez
            equipamentAtu = equipmentList[i].equipment;
            if(equipamentAnt.some(item => item === equipamentAtu)){ //se qualquer valor do meu array equipamentAnt for igual ao valor atual
                repeat = true; //Foi repetido!
                break;
            }else{
                equipamentAnt[i] = equipamentAtu; //joga valor atual no array equipamentAnt
            }
            
        }

        if(hasSelectedEquipment && repeat){
            // Mostra um alerta
            Alert.alert('ATENÇÃO!', 'Há algum equipamento repetido na sua seleção. Verifique e tente novamente.');
        }
        else if (hasSelectedEquipment && !repeat)  {
            // Chama a função para ir para o próximo stack
            handleLog();
            navigation.navigate('sucessDevolverME');
        } 
        else {
            // Mostra um alerta
            Alert.alert('ATENÇÃO!', 'Selecione pelo menos um equipamento.');
        }
    };
    
    return(
       //O  KeyboardAvoidingView junto do ScrollView fazem com que o teclado não se fixe em cima da tela
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}> 
            <ScrollView contentContainerStyle={styles.scrollContent}> 
                <View style={styles.areaHeader}>
                    <TouchableOpacity style={styles.area_icon_voltar} onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../../../../assets/voltar.png")}  
                            style={styles.icon_voltar}
                        />
                    </TouchableOpacity>
                    <View style={styles.areaTituloTela}><Text style={styles.tituloTela}>DEVOLVER EQUIPAMENTOS</Text></View>
                </View>

                <View style={styles.areaTitulo}> 
                    <Text style={styles.titulo}>Selecionar Equipamentos:</Text>
                </View>
                
                <View style={styles.areaListagem}> 
                    <View style={styles.titulosLista}>
                        <View style={styles.tituloDesc}><Text style={styles.textTitulos}> Descrição </Text></View>
                    </View>    
                    <ScrollView style={styles.ScrollView}>
                        {equipmentList.map((item, index) => (   // Essa scrow mostra as linhas adicionadas / excluidas                   
                        <View key={index} style={styles.line}>
                            <View style={styles.pickerView}>
                            <Picker // o picker é um componente para seleção de itens
                            selectedValue={item.equipment} // joga o valor selecionado para item.equipment
                            style={styles.picker}
                            onValueChange={(value) => updateEquipment(index, 'equipment', value)}
                            >
                                {/* Definindo os itens de seleção: */}
                            <Picker.Item label="" value="" style={styles.placeHolderPicker} />
                            {MeusEquip.map((item) => (
                            <Picker.Item 
                                key={item.tag} 
                                label={`${item.tag} - ${item.desc}`} 
                                value={item.tag} 
                                style={styles.pickerItem} 
                            />
                            ))}
                            </Picker>
                            </View>
                            <TouchableOpacity
                            style={styles.area_icon_delete}
                            onPress={() => deleteLine(index)} //delata linha
                            >
                            <Image
                                source={require("../../../../assets/delete.png")}  
                                style={styles.icon_delete}
                            />
                            </TouchableOpacity>
                        </View>
                        ))}
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.area_icon_add} 
                onPress={addLine} //Adiciona linha
                >
                    <Image
                        source={require("../../../../assets/add.png")}   
                        style={styles.icon_add}
                    />
                </TouchableOpacity>
                <View style={styles.divis}></View> 
                <View style={styles.areaTitulo}> 
                    <Text style={styles.titulo}>Adicionar Observação:</Text>
                </View>
                <View style={styles.areaObs}> 
                    <TextInput
                        style={styles.textObs} 
                        placeholder="Ex: MG-002 devolvido sem cabo de alimentação "//caixa de entrada de texto
                        placeholderTextColor="#888"
                        value={ObsText}
                        multiline={true} // Permite múltiplas linhas de texto
                        numberOfLines={5} // Define a altura inicial
                        onChangeText={(t) => setObsText(t)} //o que for digitado é mandado para "setSearchText" mudando o valor de searchText
                    />
                </View>
                <TouchableOpacity style={styles.butConfirm} onPress={handleConfirm}>
                <Text style={styles.textBut}> Confirmar</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1A1A24', 
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: 'center',
    },
    areaHeader:{
        flexDirection: 'row', 
        width: 400    
    },
    areaTituloTela:{
        backgroundColor: '#1A1A24',
        width:310,
        alignContent: 'center',
        alignItems: 'center'
    },
    tituloTela:{
        alignItems: 'center',
        color: '#814EC0',
        fontSize: 20,
        marginTop:17,
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
        marginLeft:15
      },
      areaTitulo:{
        backgroundColor: '#1A1A24',
        width: 360,

      },
      areaQtde:{
        backgroundColor: '#3B3E55',
        borderRadius: 5,
        paddingLeft:3,
        width: 43,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
        
      },
      text_qtde:{
        fontSize: 14,
        color: '#CBCBCB',
      },
      areaListagem:{
        marginTop:10,
        backgroundColor: '#1C1E2E', 
        width:360,
        height:240,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius:10,
    },
    area_icon_add: {
        width: 37,
        height: 35,
        marginLeft:15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C2E41',
        borderRadius: 10,
    },
    icon_add: {
        width: 20,
        height: 20,
    },
    area_icon_delete: {
        width: 30,
        height: 30,
        marginLeft:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C2E41',
        borderRadius: 10,
    },
    icon_delete: {
        width: 15,
        height: 15,
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#2C2E41',
      },
      picker: {
        color: '#CBCBCB'
      },
      pickerItem:{
        fontSize: 14,
      },
      pickerView:{
        backgroundColor: '#3B3E55',
        borderRadius: 5,
        height: 30,
        flex: 1,
        justifyContent: 'center',
      },
      divis:{
        marginTop: 15,
        borderBottomColor: '#2C2E41',
        borderBottomWidth: 1,
        width: 500,
      },
    titulosLista:{
        backgroundColor: "#1C1E2E",
        paddingLeft: 0,
        marginTop: 10,
        flexDirection: 'row',
        width:340,
    },
    tituloDesc:{
        width:320,
        alignItems: 'center',
    },
    tituloQtde:{
        width:50,
        paddingLeft: 13,
    },
    textTitulos:{
        fontSize:13,
        color: '#7B5AFC'
    },
    ScrollView:{
        backgroundColor: '#1C1E2E', 
    },
    areaObs:{
        backgroundColor: '#2C2E41', //2C2E41
        width: 340,
        height:100,
        padding:10,
        borderRadius:10,
    },
    textObs:{
        fontSize: 14,
        color: '#CBCBCB'
    },
    butConfirm:{
        padding:6,
        width:206,
        height:40,
        marginTop: 50,
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
