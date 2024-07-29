import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export function SelectEquipamentExplore ({navigation}){

    const [equipmentList, setEquipmentList] = useState([]); // array para manipulação dos equipamentos selecionados
    const [ObsText, setObsText] = useState(''); // para monitoramento e manipulação do texto digitado

    const addLine = () => { // Adiciona uma linha para seleção de equipamento, isto é adiciona um objeto dentro do array equipamentList
        setEquipmentList([...equipmentList, { quantity: '', equipment: '' }]);
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
            console.log('ID:', i, 'Quantidade:', equipmentList[i].quantity, 'Equipamento:', equipmentList[i].equipment);
            console.log('\n');
        }
        console.log(ObsText);
    };
    
    const handleConfirm = () => {
        // Verifica se pelo menos um equipamento foi selecionado
        const hasSelectedEquipment = equipmentList.some(item => item.equipment !== '');
        let l = equipmentList.length;
        let qtde = true;
        for (let i = 0; i < l; i++){
            const hasDeterQtde = (equipmentList[i].quantity === '' && equipmentList[i].equipment !== '');
            if (hasDeterQtde){
                qtde = false
            }
        }
        if (!qtde && hasSelectedEquipment){
            Alert.alert('ATENÇÃO!', 'Determine a quantidade do(os) equipamento(os).');
        }
        else if (hasSelectedEquipment && qtde)  {
            // Chama a função para ir para o próximo stack
            handleLog();
            navigation.navigate('dadosExplore');
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
                    <View style={styles.areaTituloTela}><Text style={styles.tituloTela}>SOLICITAR EQUIPAMENTOS</Text></View>
                </View>

                <View style={styles.areaTitulo}> 
                    <Text style={styles.titulo}>Selecionar Equipamentos:</Text>
                </View>
                
                <View style={styles.areaListagem}> 
                    <View style={styles.titulosLista}>
                        <View style={styles.tituloQtde}><Text style={styles.textTitulos}> Qtde. </Text></View>
                        <View style={styles.tituloDesc}><Text style={styles.textTitulos}> Descrição </Text></View>
                    </View>    
                    <ScrollView style={styles.ScrollView}>
                        {equipmentList.map((item, index) => (   // Essa scrow mostra as linhas adicionadas / excluidas                   
                        <View key={index} style={styles.line}>
                            <View style={styles.areaQtde}>
                            <TextInput
                            style={styles.text_qtde}
                            keyboardType="numeric"
                            maxLength={2}
                            value={item.quantity}
                            onChangeText={(value) => updateEquipment(index, 'quantity', value)}
                            />
                            </View>
                            <View style={styles.pickerView}>
                            <Picker // o picker é um componente para seleção de itens
                            selectedValue={item.equipment} // joga o valor selecionado para item.equipment
                            style={styles.picker}
                            onValueChange={(value) => updateEquipment(index, 'equipment', value)}
                            >
                                {/* Definindo os itens de seleção: */}
                            <Picker.Item label="" value="" style={styles.placeHolderPicker} />
                            <Picker.Item label="Alicate Terrômetro" value="Alicate Terrômetro" style={styles.pickerItem} />
                            <Picker.Item label="Detector de Tensão" value="Detector de Tensão" style={styles.pickerItem} />
                            <Picker.Item label="Extensão Elétrica" value="Extensão Elétrica" style={styles.pickerItem} />
                            <Picker.Item label="Hi-Pot 60 kVcc" value="Hi-Pot 60 kVcc" style={styles.pickerItem} />
                            <Picker.Item label="Kit de Aterramento A.T." value="Kit de Aterramento A.T." style={styles.pickerItem} />
                            <Picker.Item label="Kit de Aterramento B.T." value="Kit de Aterramento B.T." style={styles.pickerItem} />
                            <Picker.Item label="Kit de Coleta de óleo" value="Kit de Coleta de óleo" style={styles.pickerItem} />
                            <Picker.Item label="Mala de Corrente Mono." value="Mala de Corrente Mono." style={styles.pickerItem} />
                            <Picker.Item label="Mala de Corrente Trif." value="Mala de Corrente Trif." style={styles.pickerItem} />
                            <Picker.Item label="Megôhmetro 15kV" value="Megôhmetro 10kV" style={styles.pickerItem} />
                            <Picker.Item label="Megôhmetro 10kV" value="Megôhmetro 15kV" style={styles.pickerItem} />
                            <Picker.Item label="Megôhmetro 5kV" value="Megôhmetro 5kV" style={styles.pickerItem} />
                            <Picker.Item label="Mesa + Cadeira" value="Mesa + Cadeira" style={styles.pickerItem} />
                            <Picker.Item label="Microhmímetro 10A" value="Microhmímetro 10A" style={styles.pickerItem} />
                            <Picker.Item label="Microhmímetro 200A" value="Microhmímetro 200A" style={styles.pickerItem} />
                            <Picker.Item label="Termovisor" value="Termovisor" style={styles.pickerItem} />
                            <Picker.Item label="Terrômetro de Haste" value="Terrômetro de Haste" style={styles.pickerItem} />
                            <Picker.Item label="TTR" value="TTR" style={styles.pickerItem} />
                            <Picker.Item label="Vara de Manobra" value="Vara de Manobra" style={styles.pickerItem} />
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
                        placeholder="Ex: Preferência pela mala monofásica Sverker"//caixa de entrada de texto
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
        width: 43,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
        
      },
      text_qtde:{
        fontSize: 14,
        color: '#CBCBCB',
        textAlign: 'center',
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
        marginLeft: 10,
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
        width:230,
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
