import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    // botao: {
    //     backgroundColor: '#8A07DA',
    //     marginTop: 50,
    //     padding: 10,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 8,
    //     width: '90%',
    // },
    // textoBotao: {
    //     fontWeight: 'bold',
    //     fontSize: 16,
    //     color: '#fff',
    // },
    entradaTitulos: {
        paddingHorizontal: 20,
        fontSize: 20,
        color: '#444',
        marginTop: 20,
        fontWeight: 'bold',
    },
    entradaTextos: {
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginTop: 5,
    },
    list: {
        flex: 1,
        backgroundColor: '#fafafa',
        width: '100%'
    }
});

export default estilos;