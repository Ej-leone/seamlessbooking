import { StyleSheet } from 'react-native';
import color from '../../styles/colors'


export default StyleSheet.create({
    container: {
        backgroundColor: color.maincolor,
        flex: 1,
    },
    btncontainer: {
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-around",
        width: '100%',
        bottom: 0,
        marginBottom: 70
    },
    txt: {
        color: color.white
    },
    title: {
        textAlign: "center",
        color: color.white,
        fontSize: 25
    },


})
