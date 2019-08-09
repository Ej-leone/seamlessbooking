import { StyleSheet } from 'react-native';
import color from '../../styles/colors'


export default StyleSheet.create({
    container: {
        backgroundColor: color.maincolor,
        flex: 1,
    },
    btncontainer: {
        flexDirection: "row",
        justifyContent: "space-around"
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
