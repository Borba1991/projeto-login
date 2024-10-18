import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 37
    },
    boxBotao: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center'
    },
    logo: {
        width: 80,
        height: 80
    },
    titulo: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18
    },
    tituloInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20
    },
    boxInput: {
        backgroundColor: themas.colors.lightGray,
        height: 40,
        width: '100%',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: themas.colors.lightGray,
        paddingHorizontal: 5,
    },
    input: {
        width: '90%',
        height: '100%',
        paddingLeft: 7,
        borderRadius: 40
    },
    botao: {
        height: 50,
        width: 220,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.40,
        shadowRadius: 4.50,
        elevation: 5,
    },
    txtBotao: {
        fontSize: 16,
        color: themas.colors.secondary
    },
    txtSemConta: {
        fontSize: 16,
        color: themas.colors.gray
    },
    txtCriarConta: {
        fontSize: 16,
        color: themas.colors.primary
    }
})