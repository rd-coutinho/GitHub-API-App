import React, { useEffect, useState } from 'react';
// import { useRoute } from '@react-navigation/native';
import { Text, View, FlatList, TouchableOpacity, TextInput, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import estilos from './estilos';
import { useIsFocused } from '@react-navigation/native';

import { convertDate, LoadingAnimation } from '../../Functions/functions';
import { pegarRepos, pegarRepoNome } from '../../services/requests/repos';

export default function Repositorios({ route, navigation }) {    // Se passar o route dentro da function, não precisa definir o useRoute()
    const [repo, setRepo] = useState([]);
    const [nomeRepo, setNomeRepo] = useState('');
    const [qtsRepos, setQtsRepos] = useState();
    const [loading, setLoading] = useState(true);

    const estaNaTela = useIsFocused();
    // console.log(estaNaTela)
    // const route = useRoute();

    useEffect(() => {
        const asyncFetch = async () => {
            // console.log(route.params.usuarioLogin)
            const resultado = await pegarRepos(route.params.usuarioLogin);
            // console.log(resultado)
            // console.log(resultado.length)
            setRepo(resultado);
            setNomeRepo('');
            setQtsRepos(resultado.length);
            setLoading(false);
        }
        asyncFetch();

    }, [estaNaTela])

    // console.log(loading);
    
    async function buscaNomeRepo() {
        setLoading(true);
        // console.log(nomeRepo);
        const response = await pegarRepoNome(route.params.usuarioLogin, nomeRepo);
        setLoading(false);
    
        if (response.length != 0) {
            // console.log("passou")
            // setRepoFiltrado(response);
            setRepo(response);
            // console.log(response)
        }
        else {
            Alert.alert('Repositório não encontrado');
            // setRepo([]);
            // setRepoFiltrado([]);
        };
    };

    return <>
        { loading ?
            <LoadingAnimation /> :
            <View style={estilos.container}>
                <Text style={estilos.repositoriosTexto}>{qtsRepos} repositories created</Text>

                <TextInput
                    placeholder="Search a repository"
                    placeholderTextColor= "#A3A3A3" 
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={nomeRepo}
                    // onChangeText={(texto) => setNomeUsuario(texto)}
                    onChangeText={setNomeRepo}    // O que for inputado, salva no nomeRepo
                />

                <TouchableOpacity style={estilos.botao} onPress={buscaNomeRepo}>
                    <Text style={estilos.textoBotao}>
                        Search
                    </Text>
                </TouchableOpacity>

                <FlatList
                    data = {repo.sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))}
                    style={{ width: '100%'}}
                    keyExtractor={repo => repo.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={estilos.repositorio}
                            onPress={() => navigation.navigate('InfoRepository', {item})}
                        >
                            <Text style={estilos.repositorioNome}>{item.name}</Text>
                            <Text style={estilos.repositorioData}>Updated: {convertDate(item.pushed_at)}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        }
    </>
};