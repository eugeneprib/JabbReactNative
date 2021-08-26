import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 5,
        marginBottom: 10,
        height: 50,
    },
    episodeNumberCont:{
        flex: 0.1,
        width: 20,
    },
    episodeNumber: {
        textAlign: 'center',
        fontSize: 12,
        fontStyle: 'italic',
    },
    episodeInfo: {
        flex: 0.9,
        paddingHorizontal: 30,
        justifyContent: 'space-around',
    },
    episodeInfoTitle:{
        fontWeight: 'bold',
        fontSize: 16,
        width: 200,
    },
    episodeInfoDate: {
        fontSize: 10,
        marginTop: 10,
        color: '#555',
    },
})

export default styles;