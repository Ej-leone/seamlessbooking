import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';

const width = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
    container: {
        flex: 1
    },
    cardview: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
        marginBottom: 20
    },
    card: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
        shadowColor: colors.lightBlack,
        shadowOpacity: 3,
        borderRadius: 10,
        width: width / 4,
        height: width / 4

    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 100
    },
    Title: {
        color: colors.maincolor,
        fontWeight: '600',
        fontSize: 30
    },
    btnnview: {
        flexDirection: "row",
        paddingHorizontal: 10
    }

})