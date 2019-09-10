import { StyleSheet } from 'react-native';
import color from '../../styles/colors'


export default StyleSheet.create({
    container: {
        backgroundColor: color.maincolor,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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
        position: "absolute",
        top: 0,
        marginTop: '10%',
        color: color.white,
        fontSize: 25

    },
    stitle: {
        position: "absolute",
        top: 0,
        marginTop: '25%',
        color: color.white,
        fontSize: 25

    },

})
