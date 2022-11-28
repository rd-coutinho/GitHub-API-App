import axios from 'axios';

// No terminal para os dispositivos conseguirem se conectar a Web API pelo endereço IP:
// json-server --watch --host 192.168.1.186 db.json

const api = axios.create({
    baseURL: 'https://api.github.com'
});

export default api;