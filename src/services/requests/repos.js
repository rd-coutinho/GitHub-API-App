import api from '../api';

export async function pegarRepos(nomeUsuario) {
    try {
        // const response = await api.get(`/repos?postId=${id}&?name=${nome}`)
        const response = await api.get(`/users/${nomeUsuario}/repos`)
        // console.log(response.data)
        return response.data;  // Retorna a lista inteira
    }
    catch (error) {
        console.log(error);
        return [];
    };
};

export async function pegarRepoNome(nomeUsuario, nomeRepo) {
    try {
        const response = await api.get(`/repos/${nomeUsuario}/${nomeRepo}`)
        // const response = await api.get(`/repos?postId=${id}`)
        // console.log(response.data);
        return [response.data];  // Retorna a lista inteira
    }
    catch (error) {
        console.log(error);
        return [];
    };
};