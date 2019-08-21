import { StyleSheet } from 'react-native';
import color from '../../styles/colors'
export default StyleSheet.create({
    title: {
        color: color.black,
        textAlign: "center"
    },
    subtitle: {
        color: color.gray03
    },
    num: {
        color: color.black,
        fontWeight: "500",
        fontSize: 30
    },
    text: {
        color: color.maincolor,
        fontWeight: "600",
        fontSize: 20
    },
    cview: {
        flexDirection: "row"
    },
    rbtn: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: color.maincolor,
        borderWidth: 1,
        backgroundColor: color.white
    }
})
