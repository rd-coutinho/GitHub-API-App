import api from '../api';

export async function buscaUsuario(nomeUsuario) {
    try {
        const response = await api.get(`/users/${nomeUsuario}`)
        // console.log(response.data)
        return response.data
    }
    catch (error) {
        console.log(error)

        return []
    };
};