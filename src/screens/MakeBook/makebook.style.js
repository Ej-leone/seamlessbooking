import { StyleSheet } from 'react-native';
import color from '../../styles/colors'
export default StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: color.maincolor,
        fontSize: 30,
        fontWeight: "700"
    },
    subtitle: {
        color: color.gray03,
        fontSize: 20,
        fontWeight: "500"
    },
    mincontainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})