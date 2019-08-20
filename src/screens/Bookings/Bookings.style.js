import colors from '../../styles/colors';
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.white,
    },
    errortext: {
        color: colors.maincolor,
        fontSize: 40

    },
    errorview: {
        justifyContent: "center",
        alignContent: "center"
    }

});