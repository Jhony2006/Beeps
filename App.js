import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { RoutesTab } from './src/routes/routesTab'

export default function App(){
  return(
        <NavigationContainer>  
          <StatusBar 
            backgroundColor="#1A1A24" // Define a cor de fundo da barra de status
            barStyle="light-content" // Define o estilo do texto e dos ícones da barra de status
          />
          <RoutesTab/> 
        </NavigationContainer>

    )
}