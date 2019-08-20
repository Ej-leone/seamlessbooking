import { StyleSheet } from 'react-native';
import color from '../../styles/colors'
export default StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
        padding: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
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