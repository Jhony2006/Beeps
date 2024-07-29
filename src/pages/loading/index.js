import { View, Text, StyleSheet, Image } from 'react-native'

export function Loading(){
  return(
    <View style={styles.container}> 
      <Image 
      source={require("../../assets/delta.png")} // O "View" é um espaço, área em branco
      style={styles.logo} // Define o estilo
      />
      <Text style={styles.beeps}>Beeps</Text>
      <Image 
      source={require("../../assets/loading.png")} //Insere Imagem
      style={styles.loading}
      />
    </View>
  )
}

const styles = StyleSheet.create ({ //Cria objeto de estilos
  container: {
    flex: 1,
    backgroundColor: '#1A1A24', // cor de fundo
    alignItems: 'center', //Alinha horizontalmente

  },
  logo: {
    marginTop: 190, //Define margem superior
    width: 143, //largura  
    height: 143 //Altura
  },
  beeps: {
    color: "#814EC0", //Cor
    fontSize: 26, // Tamanho da fonte
    marginTop: 8,
    fontWeight: 'bold'
  },
  loading: {
    marginTop: 200,
    width: 60,
    height: 60
  }
})