import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Principal from './paginas/Principal';
import Repositorios from './paginas/Repositorios';
import InfoRepositorio from './paginas/InfoRepositorio';

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Principal" options={{ headerShown: false, title: "Profile" }} component={Principal} />
                <Tab.Screen name="Repositories" options={{ title: "Profile" }} component={Repositorios} />
                <Tab.Screen name="InfoRepository" options={{ title: "Repository Info" }} component={InfoRepositorio} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}