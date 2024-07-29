import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MeusEquip from '../../../../components/list_meus_equip/itens'
import Users from '../../../../components/users'

export function TransferirME ({navigation}){

    const [equipmentList, setEquipmentList] = useState([]); // array para manipulação dos equipamentos selecionados
    const [UserResp, setUserResp] = useState('');

    const addLine = () => { // Adiciona uma linha para seleção de equipamento, isto é adiciona um objeto dentro do array equipamentList
        setEquipmentList([...equipmentList, { equipment: '', status: ''}]);
    };
    
    const deleteLine = (index) => { // Deleta uma linha já criada, isto é, exclui o objeto
        const updatedList = equipmentList.filter((_, i) => i !== index);
        setEquipmentList(updatedList);
    };
    
    const updateEquipment = (index, field, value) => {
        
        // Adiciona valores (quantidade, descrição e ID - Index) dentro dos objetos do array equipmentList
        const updatedList = equipmentList.map((item, i) => {
            // Cria uma nova lista atualizada, mapeando sobre cada item em equipmentList
            
            if (i === index) {
                // Se o índice do item atual é igual ao índice fornecido
                
                const selectedEquip = MeusEquip.find(equip => equip.tag === value);
                // Encontra o equipamento em MeusEquip que tem a tag igual ao valor fornecido
                
                return { 
                    ...item, 
                    [field]: value, 
                    status: selectedEquip ? selectedEquip.status : '' 
                    // Retorna um novo objeto item, com todos os campos do item original,
                    // o campo específico (field) atualizado para o novo valor,
                    // e o campo status definido para o status do equipamento selecionado ou vazio se não encontrado
                };
            }
            
            return item;
            // Se o índice não corresponde, retorna o item original sem alterações
        });
        
        setEquipmentList(updatedList);
        // Atualiza o estado equipmentList com a lista atualizada
    };


    const handleLog = () => {  //Printa as informações do formulário no terminal
        let l = equipmentList.length;
        for(let i = 0; i < l; i++){
            console.log('ID:', i, 'Equipamento:', equipmentList[i].equipment, 'Status:', equipmentList[i].status);
        }
        console.log('Para: ',UserResp);
        

    };
    
    const handleConfirm = () => {
        const hasSelectedEquipment = equipmentList.some(item => item.equipment !== ''); // Verifica se pelo menos um equipamento foi selecionado
        const hasUser = (UserResp !== ''); //Verifica se selecionou o responsável/user

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

        // Verifica equipamentos vencidos e adiciona ao array vencidos/próx. do vencimento
        const vencidosList = equipmentList
        .filter(item => item.status === 'Vencido' || item.status === 'Próx. Vencimento')
        .map(item => ({
            tag: item.equipment,
            desc: MeusEquip.find(equip => equip.tag === item.equipment)?.desc || '',
            status: item.status
        }));

        if(hasSelectedEquipment && repeat){
            // Mostra um alerta
            Alert.alert('ATENÇÃO!', 'Há algum equipamento repetido na sua seleção. Verifique e tente novamente.');
        }
        else if(hasSelectedEquipment && !repeat && !hasUser){
            // Mostra um alerta
            Alert.alert('ATENÇÃO!', 'Você precisa selecionar o destinatário da transferência.');
        }
        else if(hasSelectedEquipment && !repeat && hasUser && vencidosList.length !== 0){
            // Vai para página de alerta
            navigation.navigate('avisoVencido', { equipamentosVencidos: vencidosList } );
        }
        else if (hasSelectedEquipment && !repeat && hasUser && vencidosList.length === 0)  {
            // Chama a função para ir para o próximo stack
            handleLog();
            
            //navigation.navigate('sucessTransferirME');
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
                    <View style={styles.areaTituloTela}><Text style={styles.tituloTela}>TRANSFERIR EQUIPAMENTOS</Text></View>
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
                            dropdownIconColor='#CBCBCB' //Cor da setinha do picker
                            >
                                {/* Definindo os itens de seleção: */}
                            <Picker.Item label="" value=""/>
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
                    <Text style={styles.titulo}>Transferir para:</Text>
                </View>
                <View style={styles.areaResp}> 
                    <View style={styles.pickerView2}>
                        <Picker // o picker é um componente para seleção de itens
                            selectedValue={UserResp} // joga o valor selecionado para item.equipment
                            style={styles.picker}
                            onValueChange={(value) => setUserResp(value)}
                            dropdownIconColor='#CBCBCB' //Cor da setinha do picker
                            >
                            {/* Definindo os itens de seleção: */}
                            <Picker.Item label="" value="" style={styles.pickerItem} />
                            {Users.map((item) => (
                            <Picker.Item 
                                key={item} 
                                label={item} 
                                value={item} 
                                style={styles.pickerItem} 
                            />
                            ))}
                        </Picker>
                    </View>
                </View>
                <TouchableOpacity style={styles.butConfirm} onPress={handleConfirm}>
                <Text style={styles.textBut}> Confirmar </Text>
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
        color: '#CBCBCB',
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
      pickerView2:{
        backgroundColor: '#2C2E41',
        borderRadius: 5,
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
    areaResp:{
        backgroundColor: '#2C2E41', //2C2E41
        width: 340,
        height:40,
        padding:10,
        borderRadius:25,
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
