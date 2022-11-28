import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, FlatList } from 'react-native';
import estilos from './estilos';

import { convertDate } from '../../Functions/functions';

export default function InfoRepositorio({ route, navigation }) {
    const topics = route.params.item.topics
    // console.log(topics.length)
    // console.log(topics)
    // console.log(route.params)

    return (
        <FlatList
            ListHeaderComponent={
                <View style={estilos.container}>
                    <Text style={estilos.entradaTitulos}>Repository name:</Text>
                    <Text style={estilos.entradaTextos}>{route.params.item.name}</Text>

                    <Text style={estilos.entradaTitulos}>Created at:</Text>
                    <Text style={estilos.entradaTextos}>{convertDate(route.params.item.created_at)}</Text>

                    <Text style={estilos.entradaTitulos}>Pushed at:</Text>
                    <Text style={estilos.entradaTextos}>{convertDate(route.params.item.pushed_at)}</Text>

                    <Text style={estilos.entradaTitulos}>Description:</Text>
                    <Text style={estilos.entradaTextos}>{route.params.item.description}</Text>

                    <Text style={estilos.entradaTitulos}>Languages:</Text>
                    <Text style={estilos.entradaTextos}>{route.params.item.language}</Text>
                    
                    <Text style={estilos.entradaTitulos}>Topics:</Text>
                
                </View>
            }
            data={topics}
            style={estilos.list}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
                <Text style={estilos.entradaTextos}>{item}</Text>
            )}
        />
    );
}
