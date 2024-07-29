import { createStackNavigator } from '@react-navigation/stack';
import { MeusEquipamentos } from '../pages/meus_equipamentos';
import { AlteraDados } from '../pages/meus_equipamentos/subpages/alterarDados';
import { SucessAlterarME } from '../pages/meus_equipamentos/subpages/sucessAlterar';
import { DevolucaoME } from '../pages/meus_equipamentos/subpages/devolucao';
import { SucessDevolverME } from '../pages/meus_equipamentos/subpages/sucessDevolu';
import { TransferirME } from '../pages/meus_equipamentos/subpages/transferir';
import { SucessTransferirME } from '../pages/meus_equipamentos/subpages/sucessTransf';
import { AvisoVencidoME } from '../pages/meus_equipamentos/subpages/VencidosME';
import { DetalhesEquipsME } from '../pages/meus_equipamentos/subpages/detalhesME';
import { RelatarDefeito } from '../pages/meus_equipamentos/subpages/relatar';


const Stack = createStackNavigator();

export default function RoutesStackME(){
    return(
        <Stack.Navigator>
            {/* ------------- STACK MEUS EQUIP - INICIO --------- */}
            <Stack.Screen
            name = "meusEquipamentos"
            component = {MeusEquipamentos}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "alteraDados"
            component = {AlteraDados}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "sucessAlterarME"
            component = {SucessAlterarME}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "devolucao"
            component = {DevolucaoME}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "sucessDevolverME"
            component = {SucessDevolverME}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "transferir"
            component = {TransferirME}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "sucessTransferirME"
            component = {SucessTransferirME}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "avisoVencido"
            component = {AvisoVencidoME}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "detalhesME"
            component = {DetalhesEquipsME}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            <Stack.Screen
            name = "relatarDefeito"
            component = {RelatarDefeito}
            options={{ 
                headerShown: false,
                animationEnabled: false,
                }}
            />
            {/* ------------- STACK MEUS EQUIP - FIM --------- */}
    </Stack.Navigator>
    )
}