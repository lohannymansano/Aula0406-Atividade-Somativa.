import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import AlunoScreen from './Screens/AlunoScreen';
import CursoScreen from './Screens/CursoScreen';
import EscolaScreen from './Screens/EscolaScreen';
import TelaInicialScreen from './Screens/TelaInicialScreen';

const Drawer = createDrawerNavigator();

function Navigation(){
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Inicio">
                <Drawer.Screen name="Aluno" component={AlunoScreen}/>
                <Drawer.Screen name="Curso" component={CursoScreen}/>
                <Drawer.Screen name="Senai" component={EscolaScreen}/>
                  <Drawer.Screen name="Inicio" component={TelaInicialScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;