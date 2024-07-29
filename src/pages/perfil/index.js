import { View, Text, StyleSheet, Image } from 'react-native'

export function Perfil (){
    return(
        <View style = { styles.container}>
             <Text style={styles.Tela}> Perfil </Text>
             <View style={styles.areaImage}>
                <Image
                source={require("../../assets/perfil.png")}
                style={styles.icon_perfil}
                />
             </View>
             <View style={styles.areaTitulo1}>
                <Text style={styles.textTitulo1}> Dados Pessoais: </Text>
             </View>
             <View style={ styles.areaTitulos }>
                <Text style={styles.textTitulos}> Nome </Text>
             </View>
             <View style={ styles.areaInfo }>
                <Text style={styles.textInfo}> Joao Pedro Oliveira Vittoria </Text>
             </View>
             <View style={ styles.areaTitulos }>
                <Text style={styles.textTitulos}> Usuário </Text>
             </View>
             <View style={ styles.areaInfo }>
                <Text style={styles.textInfo}> joao.vittoria </Text>
            </View>
            <View style={ styles.areaTitulos }>
                <Text style={styles.textTitulos}> E-mail</Text>
             </View>
             <View style={ styles.areaInfo }>
                <Text style={styles.textInfo}> joao.vittoria@siner.com.br </Text>
             </View>
             <View style={ styles.areaTitulos }>
                <Text style={styles.textTitulos}> Telefone</Text>
             </View>
             <View style={ styles.areaInfo }>
                <Text style={styles.textInfo}> (11) 98316 - 4488 </Text>
             </View>
             <View style={styles.butEdit}>
                <Text style={styles.textBut}> Editar Perfil</Text>
            </View>
            
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
        marginBottom: 35
    },
    areaImage:{
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: '#1C1E2E',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30

    },
    icon_perfil:{
        width:80,
        height: 80,
    },
    areaTitulo1:{
        width: 360,
        paddingLeft:15,
    },
    textTitulo1: {
        fontSize: 20,
        color: '#CBCBCB'
    },
    areaTitulos:{
        marginTop:20,
        width: 360,
        paddingLeft:20,
    },
    textTitulos: {
        fontSize: 18,
        color: '#7B5AFC'
    },
    areaInfo:{
        width: 360,
        paddingLeft:20,
    },
    textInfo: {
        fontSize: 14,
        color: '#CBCBCB'
    },
    butEdit:{
        padding:6,
        width:130,
        height:40,
        marginTop: 35,
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
});