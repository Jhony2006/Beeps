import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert, PermissionsAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';


export function RelatarDefeito ({navigation}){
    const [DescText, setDescText] = useState(''); // para monitoramento e manipulação do texto digitado
    const [DefeitoType, setDefeitoType] = useState('');
    const [image, setImage] = useState([]);

        const handleSelectImage = ()=> {
            Alert.alert(
                "Selecione", 
                "De onde você quer pegar a imagem?",
                [
                    {
                        text: 'Galeria',
                        onPress: () => imageFromGallery(),
                        style: 'default'
                    },
                    {
                        text: 'Câmera',
                        onPress: () => imageFromCamera(),
                        style: 'default'
                    },
                ],
                {
                    cancelable: true,
                    onDismiss: () => console.log('tratar depois...'),
                }
            );
        };

        const imageFromGallery = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
            });
    
            console.log(result);
    
            if (!result.canceled) {
                // setImage([...image, result.assets[0].uri]);
            }
        };

        const imageFromCamera = async () => {
            let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
            });
    
            console.log(result);
    
            if (!result.canceled) {
                setImage([...image, result.assets[0].uri]);
                // console.log(result.assets[0].uri);
            }
        };

    const handleLog = () => {  //Printa as informações do formulário no terminal
        console.log("Tipo:", DefeitoType, "\n Descrição:" , DescText, "\n uri's:", image);
        
    };
    
    const deleteImage = (uri) => {
        setImage(image.filter(imageUri => imageUri !== uri));
      };
    
    const handleConfirm = () => {

        const hasSelectedDefeito = DefeitoType !== '';
        const hasSelectedDescr =  DescText !== '';

        if(hasSelectedDefeito && !hasSelectedDescr){
            // Mostra um alerta
            Alert.alert('ATENÇÃO!', 'Você deve preencher a descrição do defeito!');
        }
        else if (hasSelectedDefeito && hasSelectedDescr)  {
            // Chama a função para ir para o próximo stack
            handleLog();
            navigation.navigate('sucessDevolverME');
        } 
        else {
            // Mostra um alerta
            Alert.alert('ATENÇÃO!', 'Selecione o tipo de defeito!');
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
                    <View style={styles.areaTituloTela}><Text style={styles.tituloTela}>Relatar Defeito</Text></View>
                </View>

                <View style={styles.areaTitulo}> 
                    <Text style={styles.titulo}>Tipo do Defeito:</Text>
                </View>

                <View style={styles.areaType}> 
                    <View style={styles.pickerView2}>
                        <Picker // o picker é um componente para seleção de itens
                            selectedValue={DefeitoType} // joga o valor selecionado para item.equipment
                            style={styles.picker}
                            onValueChange={(value) => setDefeitoType(value)}
                            dropdownIconColor='#CBCBCB' //Cor da setinha do picker
                            >
                            {/* Definindo os itens de seleção: */}
                            <Picker.Item label="" value="" style={styles.pickerItem} />
                            <Picker.Item label="Crítico (Inoperável)" value="Crítico (Inoperável)" style={styles.pickerItem} />
                            <Picker.Item label="Grave (Funcionalidade Parcial)" value="Grave (Funcionalidade Parcial)" style={styles.pickerItem} />
                            <Picker.Item label="Moderado (Necessário Atenção)" value="Moderado (Necessário Atenção)" style={styles.pickerItem} />
                            <Picker.Item label="Leve (Monitoramento Recomendado)" value="Leve (Monitoramento Recomendado)" style={styles.pickerItem} />
                            <Picker.Item label="Potencial (Risco de Defeito Futuro)" value="Potencial (Risco de Defeito Futuro)" style={styles.pickerItem} />
                        </Picker>
                    </View>
                </View>
                <View style={styles.areaTitulo}> 
                    <Text style={styles.titulo}>Descreva o Defeito:</Text>
                </View>
                <View style={styles.areaDesc}> 
                    <TextInput
                        style={styles.textDesc} 
                        placeholder="Ex: O Hi-Pot HP - 003 ao realizar ensaios apresenta fuga de corrente internamente no cabo de alta tensão."//caixa de entrada de texto
                        placeholderTextColor="#888"
                        value={DescText}
                        multiline={true} // Permite múltiplas linhas de texto
                        numberOfLines={5} // Define a altura inicial
                        onChangeText={(t) => setDescText(t)} //o que for digitado é mandado para "setSearchText" mudando o valor de searchText
                    />
                </View>
                <TouchableOpacity style={styles.areaImages} onPress={handleSelectImage}>
                <Image
                    source={require('../../../../assets/add.png')}
                    style={styles.icon_add}
                />
                <Text style={styles.textImages}>Anexar Imagens</Text>
                </TouchableOpacity>
            <ScrollView style={styles.imagesContainer}>
                {image.length > 0 ? (
                image.map((uri, index) => (
                    <View key={index} style={styles.linhasImages}>
                        <Image source={{ uri }} style={styles.image} />
                        <TouchableOpacity
                            style={styles.area_icon_delete}
                            onPress={() => deleteImage(uri)} //delata linha
                            >
                            <Image
                                source={require("../../../../assets/delete.png")}  
                                style={styles.icon_delete}
                            />
                        </TouchableOpacity>
                  </View>
                ))
                ) : (
                <Text style={styles.placeholderText}>Nenhuma imagem selecionada</Text>
                )}
            </ScrollView>
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
      picker: {
        color: '#CBCBCB'
      },
      pickerItem:{
        fontSize: 14,
      },
    areaDesc:{
        backgroundColor: '#2C2E41', //2C2E41
        width: 340,
        height:100,
        padding:10,
        borderRadius:10,
    },
    textDesc:{
        fontSize: 14,
        color: '#CBCBCB'
    },
    butConfirm:{
        padding:6,
        width:206,
        height:40,
        marginTop: 50,
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
      pickerView2:{
        backgroundColor: '#2C2E41',
        borderRadius: 5,
        flex: 1,
        justifyContent: 'center',
      },
      areaType:{
        backgroundColor: '#2C2E41', //2C2E41
        width: 340,
        height:40,
        padding:10,
        borderRadius:25,
        marginTop: 15,
    },
    areaImages:{
        backgroundColor: '#2C2E41', //2C2E41
        flexDirection: 'row',
        width: 340,
        height:35,
        padding:10,
        borderRadius:6,
        marginTop: 15,
    },
    textImages:{
        fontSize:10,
        color: '#CBCBCB',
    },
    icon_add:{
        width: 14,
        height: 14,
        marginRight: 5
    },
    imagesContainer: {
        width: 340,
        backgroundColor: '#1A1A24',
        marginTop: 5,
      },
      linhasImages:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#2C2E41',
      },
      image: {
        width: 260,
        height: 100,
        resizeMode: 'stretch',
        borderRadius: 5,
      },
      placeholderText: {
        marginTop: 20,
        fontSize: 16,
        color: '#888',
      },
      area_icon_delete: {
        width: 70,
        height: 100,
        marginLeft:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C2E41',
        borderRadius: 10,
    },
    icon_delete: {
        width: 20,
        height: 20,
    },
})
