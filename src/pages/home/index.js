import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'

export function Home(){
  const [nome, setNome] = useState('João Pedro');
  return(
//****************************BEM VINDO****************************//
    <View style={styles.container}> 
      <Text style={styles.Tela}> Home</Text> 
      <Text style={styles.welcome}> Olá {nome}, seja bem-vindo!</Text> 
{/* ***************** INÍCIO CAMPO 1 ******************* */}
      <View style={styles.campo}>
{/* ***************** TÍTULO ******************* */}
        <View style={styles.areaTitulo}> 
          <Text style={styles.titulo}> Notificações e avisos </Text>
{/* ***************** ÍCONE ******************* */}
          <View style={styles.area_expandir}>
            <Image
              source={require("../../assets/expandir.png")}
              style={styles.icon_expandir}
            />
          </View>
        </View>
{/* ***************** INFORMAÇÕES 01 ******************* */}
        <View style={styles.info}>
          <Text style={styles.textoInfo}> O equipamento MM - 002 está próximo do vencimento</Text>
          <View style={styles.area_info}>
            <Image
              source={require("../../assets/info.png")}
              style={styles.icon_info}
            />
          </View>
        </View>
{/* ***************** INFORMAÇÕES 02 ******************* */}
        <View style={styles.info}>
          <Text style={styles.textoInfo}> Novo  pedido  de  transferência de “Fernando Pontes” </Text> 
          <View style={styles.area_info}>
            <Image
              source={require("../../assets/info.png")}
              style={styles.icon_info}
            />
          </View>
        </View>
{/* ***************** INFORMAÇÕES 03 ******************* */}
        <View style={styles.info}>
          <Text style={styles.textoInfo}> Sua solicitação de equipamentos foi aprovada! </Text> 
          <View style={styles.area_info}>
            <Image
              source={require("../../assets/info.png")}
              style={styles.icon_info}
            />
          </View>
        </View>
      </View>
{/* ***************** FINAL CAMPO 1 ******************* */}

{/* ***************** INÍCIO CAMPO 2 ******************* */}
<View style={styles.campo}>
{/* ***************** TÍTULO ******************* */}
        <View style={styles.areaTitulo}> 
          <Text style={styles.titulo}> Solicitações para mim </Text>
{/* ***************** ÍCONE ******************* */}
          <View style={styles.area_expandir}>
            <Image
              source={require("../../assets/expandir.png")}
              style={styles.icon_expandir}
            />
          </View>
        </View>
{/* ***************** INFORMAÇÕES 01 ******************* */}
        <View style={styles.info}>
          <Text style={styles.textoInfo}> Solicitação de transferência de “Fernando Pontes”</Text>
          <View style={styles.area_info}>
            <Image
              source={require("../../assets/info.png")}
              style={styles.icon_info}
            />
          </View>
        </View>
{/* ***************** INFORMAÇÕES 02 ******************* */}
        <View style={styles.info}>
          <Text style={styles.textoInfo}> Solicitação de transferência de “Vagner Viana” </Text> 
          <View style={styles.area_info}>
            <Image
              source={require("../../assets/info.png")}
              style={styles.icon_info}
            />
          </View>
        </View>
{/* ***************** INFORMAÇÕES 03 ******************* */}
        <View style={styles.info}>
          <Text style={styles.textoInfo}> Solicitação de transferência de “Vagner Viana” </Text> 
          <View style={styles.area_info}>
            <Image
              source={require("../../assets/info.png")}
              style={styles.icon_info}
            />
          </View>
        </View>
      </View>
{/* ***************** FINAL CAMPO 2 ******************* */}

{/* ***************** INÍCIO CAMPO 3 ******************* */}
<View style={styles.campo}>
{/* ***************** TÍTULO ******************* */}
        <View style={styles.areaTitulo}> 
          <Text style={styles.titulo}> Minhas solicitações </Text>
{/* ***************** ÍCONE ******************* */}
          <View style={styles.area_expandir}>
            <Image
              source={require("../../assets/expandir.png")}
              style={styles.icon_expandir}
            />
          </View>
        </View>
{/* ***************** INFORMAÇÕES 01 ******************* */}
        <View style={styles.info}>
          <Text style={styles.textoInfo}> Solicitação de transferência para “Juliano Peixoto” </Text>
          <View style={styles.area_info}>
            <Image
              source={require("../../assets/info.png")}
              style={styles.icon_info}
            />
          </View>
        </View>
{/* ***************** INFORMAÇÕES 02 ******************* */}
        <View style={styles.info}>
          <Text style={styles.textoInfo}> Solicitação de devolução para “Laboratório” </Text> 
          <View style={styles.area_info}>
            <Image
              source={require("../../assets/info.png")}
              style={styles.icon_info}
            />
          </View>
        </View>
{/* ***************** INFORMAÇÕES 03 ******************* */}
        <View style={styles.info}>
          <Text style={styles.textoInfo}> Solicitação de equipamentos</Text> 
          <View style={styles.area_info}>
            <Image
              source={require("../../assets/info.png")}  
              style={styles.icon_info}
            />
          </View>
        </View>
      </View>
{/* ***************** FINAL CAMPO 3 ******************* */}
    </View>
  )
}

const styles = StyleSheet.create ({ 
  container: {
    flex: 1,
    backgroundColor: '#1A1A24', 
    alignItems: 'center',
    //justifyContent: 'center'
  },
  Tela:{
    color: '#814EC0',
    fontSize: 30,
    marginTop:50,
    marginBottom: 20
  },
  welcome: {
    color: '#CBCBCB',
    fontSize: 22,
    marginTop:12,
    marginBottom: 20
  },
  titulo:{
    borderRadius: 10,
    color: '#7B5AFC',
    fontSize: 18,
  },
  icon_expandir: {
    width: 19,
    height: 19,
    
  },
  area_expandir: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C2E41',
    borderRadius: 7,
  },
  icon_info: {
    width: 14,
    height: 14,
    backgroundColor: '#2C2E41',
    borderRadius: 30,
  },
  area_info: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C2E41',
    borderRadius: 30,
  },
  campo:{
    marginTop: 20,
    width: 360,
    height: 150,
    backgroundColor: '#1C1E2E',
    borderRadius: 10,
  },
  areaTitulo: {
    width: 360,
    height: 40,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    justifyContent: 'space-between'
  },
  info: {
    width: 360,
    marginTop: 5,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  textoInfo: {
    width: 310,
    paddingLeft: 10,
    fontSize: 12,
    color: '#CBCBCB'
  }
})