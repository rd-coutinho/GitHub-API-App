import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import estilos from './estilos';
import logo from '../../../assets/GitHub.jpg';

// import api from '../../services/api';
import { buscaUsuario } from '../../services/requests/users';
import { LoadingAnimation } from '../../Functions/functions';

export default function Principal({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});
    const [loading, setLoading] = useState(false);

    async function busca() {
        setLoading(true)
        const response = await buscaUsuario(nomeUsuario);
        // console.log(response);

        setNomeUsuario('');
        setLoading(false);
        // console.log(response.length)
        if (response.length != 0) {
            setUsuario(response);
            // console.log(usuario)
        }
        else {
            Alert.alert('Usuário não encontrado');
            setUsuario({});
        };
    };

    // console.log(loading);

    return <>
        { loading ?
            <LoadingAnimation /> :
            <SafeAreaView style={estilos.scrollView}>
                <ScrollView>
                    <View style={estilos.container}>
                        <View style={estilos.viewLogo}>
                            <Image source={logo} style={estilos.logo} />
                        </View>
                        {
                            usuario?.login && 
                        <>
                            <View style={estilos.fundo} />
                            <View style={estilos.imagemArea}>
                                <Image source={{ uri: usuario.avatar_url }} style={estilos.imagem} />
                            </View>
                            <Text style={estilos.textoNome}>{usuario.name}</Text>

                            {
                                usuario?.email &&
                            <>
                                <Text style={estilos.textoSecundario}>{usuario.email}</Text>
                            </>
                            }

                            {
                                usuario?.bio &&
                            <>
                                <Text style={estilos.textoSecundario}>{usuario.bio}</Text>
                            </>
                            }

                            {
                                usuario?.location &&
                            <>
                                <Text style={estilos.textoSecundario}>{usuario.location}</Text>
                            </>
                            }

                            <View style={estilos.seguidoresArea}>
                                <View style={estilos.seguidores}>
                                    <Text style={estilos.seguidoresNumero}>{usuario.followers}</Text>
                                    <Text style={estilos.seguidoresTexto}>Followers</Text>
                                </View>
                                <View style={estilos.seguidores}>
                                    <Text style={estilos.seguidoresNumero}>{usuario.following}</Text>
                                    <Text style={estilos.seguidoresTexto}>Following</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Repositories', {usuarioLogin: usuario.login})}>
                                <Text style={estilos.repositorios}>
                                    See repositories
                                </Text>
                            </TouchableOpacity>
                        </>
                        }

                        <TextInput
                            placeholder="Search user"
                            placeholderTextColor= "#A3A3A3" 
                            autoCapitalize="none"
                            style={estilos.entrada}
                            value={nomeUsuario}
                            // onChangeText={(texto) => setNomeUsuario(texto)}
                            onChangeText={setNomeUsuario}    // O que for inputado, salva no nomeUsuario
                        />

                        <TouchableOpacity style={estilos.botao} onPress={busca}>
                            <Text style={estilos.textoBotao}>
                                Search
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        }
    </>
};