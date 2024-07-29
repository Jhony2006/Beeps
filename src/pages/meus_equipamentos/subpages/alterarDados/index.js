import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export function AlteraDados ({navigation}){
    const [localText, setLocalText] = useState(''); // para monitoramento e manipulação do texto digitado
    const [servicoText, setServicoText] = useState(''); // para monitoramento e manipulação do texto digitado
    const [dataUtilText, setDataUtilText] = useState(''); // para monitoramento e manipulação do texto digitado
    const [dataDevText, setDataDevText] = useState(''); // para monitoramento e manipulação do texto digitado
    const [ObsText, setObsText] = useState(''); // para monitoramento e manipulação do texto digitado

    const handleLog = () => {  //Printa as informações do formulário no terminal
            console.log('Local:', localText, 'Serviço:', servicoText, 'Prev. Util.:', dataUtilText, 'Prev. Dev:', dataDevText);
    };
    const handleConfirm = () => {
        // Verifica se todos os campos foram preenchidos 
        const hasAllInfos = (localText !== '' && servicoText !== '' && dataUtilText !== '' && dataDevText !== '' && ObsText !== '');
        const verificaDatas = (dataUtilText.length === 10 && dataDevText.length === 10);
        if (!verificaDatas && hasAllInfos) {
            // Mostra um alerta
            Alert.alert('ATENÇÃO!', 'Alguma data fornecida está em um formato inválido. Preencha as datas conforme o exmplo: DD/MM/YYYY');
        }
        else if (hasAllInfos) {
            // Chama a função para ir para o próximo stack
            handleLog();
            navigation.navigate('sucessAlterarME');
        }
        else {
            // Mostra um alerta
            Alert.alert('ATENÇÃO!', 'Preencha todos os campos para concluir a solicitação.');
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
                    <View style={styles.areaTituloTela}><Text style={styles.tituloTela}>ALTERAR DADOS</Text></View>
                </View>

                <View style={styles.areaTitulo}> 
                    <Text style={styles.titulo}>Altere os dados:</Text>
                </View>
                <View style={styles.areaInput}> 
                    <Text style={styles.tituloInput}>Local</Text>
                    <TextInput
                        style={styles.textInput} 
                        placeholder="Ex: Usina São Martinho" //caixa de entrada de texto
                        placeholderTextColor="#888"
                        value={localText}
                        onChangeText={(t) => setLocalText(t)} //o que for digitado é mandado para "setSearchText" mudando o valor de searchText
                    />
                </View>
                <View style={styles.areaInput}> 
                    <Text style={styles.tituloInput}>Tipo de Serviço</Text>
                    <TextInput
                        style={styles.textInput} 
                        placeholder="Ex: Manutenção Preventiva" //caixa de entrada de texto
                        placeholderTextColor="#888"
                        value={servicoText}
                        onChangeText={(t) => setServicoText(t)} //o que for digitado é mandado para "setSearchText" mudando o valor de searchText
                    />
                </View>
               <View style={styles.areaInput}>
                    <Text style={styles.tituloInput}>Previsão de Utilização</Text>
                    <TextInputMask
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        placeholder="00/00/0000" //caixa de entrada de texto
                        placeholderTextColor="#888"
                        style={styles.textInput}
                        value={dataUtilText}
                        onChangeText={(text) => setDataUtilText(text)}
                    />
                </View>
                <View style={styles.areaInput}> 
                    <Text style={styles.tituloInput}>Previsão de Devolução</Text>
                    <TextInputMask
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        placeholder="00/00/0000" //caixa de entrada de texto
                        placeholderTextColor="#888"
                        style={styles.textInput}
                        value={dataDevText}
                        onChangeText={(text) => setDataDevText(text)}
                    />
                </View>
                <View style={styles.areaTitulo}> 
                    <Text style={styles.titulo}>Motivo da Alteração:</Text>
                </View>
                <View style={styles.areaObs}> 
                    <TextInput
                        style={styles.textObs} 
                        placeholder="Ex: Deslocamento para Usina da Pedra."//caixa de entrada de texto
                        placeholderTextColor="#888"
                        value={ObsText}
                        multiline={true} // Permite múltiplas linhas de texto
                        numberOfLines={5} // Define a altura inicial
                        onChangeText={(t) => setObsText(t)} //o que for digitado é mandado para "setSearchText" mudando o valor de searchText
                    />
                </View>
                <TouchableOpacity style={styles.butConfirm} onPress={handleConfirm}>
                    <Text style={styles.textBut}> Concluir </Text>
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
        width:280,
        alignContent: 'center',
        alignItems: 'center'
    },
    tituloTela:{
        alignItems: 'center',
        color: '#814EC0',
        fontSize: 28,
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
        fontSize: 20,
        marginTop:12,
        marginBottom: 0,
        marginLeft:15
      },
      areaTitulo:{
        backgroundColor: '#1A1A24',
        width: 360,
        marginBottom: 15,
      },
      areaInput:{
        width: 350,
        marginBottom: 15,
      },
      tituloInput:{
        color: "#CBCBCB",
        fontSize: 15,
        marginBottom: 10,
        paddingLeft:10,
      },
      textInput:{
        backgroundColor: '#2C2E41',
        fontSize: 15,
        color: '#CBCBCB',
        padding: 5,
        paddingLeft: 15,
        borderRadius: 20,
        height: 45,
      },
      butConfirm:{
        padding:6,
        width:206,
        height:40,
        marginTop: 30,
        marginBottom: 50,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#762FCF',
        borderRadius:37
        },
        textBut:{
        fontSize:15,
        color: '#CBCBCB',
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

})