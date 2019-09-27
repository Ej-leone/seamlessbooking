import colors from "../../styles/colors";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default StyleSheet.create({
    imback: {
        justifyContent: "center",
        alignItems: "center",
        width: screenWidth / 1.05,
        height: screenWidth / 3
    },
})