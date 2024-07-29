import { createStackNavigator } from '@react-navigation/stack';
import { Explorar } from '../pages/explorar';
import { SelectEquipamentExplore } from '../pages/explorar/subpages/selectEquip';
import { DadosExplore } from '../pages/explorar/subpages/dadosSE';
import { SucessExplore } from '../pages/explorar/subpages/sucess_SE';
import { DetalhesEquipsExplore } from '../pages/explorar/subpages/detalhesEquip';
import { ListaExplore } from '../components/list_explorer';


const Stack = createStackNavigator();

export default function RoutesStackExplore(){
    return(
        <Stack.Navigator initialRouteName="explore">
            {/* ------------- STACK EXPLORE - INICIO --------------- */}
            <Stack.Screen
            name = "explore"
            component = {Explorar}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "listExplore"
            component = {ListaExplore}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "selectEquipament"
            component = {SelectEquipamentExplore}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "dadosExplore"
            component = {DadosExplore}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "sucessExplore"
            component = {SucessExplore}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "detalheEquipExplore"
            component = {DetalhesEquipsExplore}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            {/* ------------- STACK EXPLORE - FIM --------------- */}
    </Stack.Navigator>
    )
}