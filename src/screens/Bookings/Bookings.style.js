import colors from "../../styles/colors";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.white
  },
  errortext: {
    color: colors.maincolor,
    fontSize: 40
  },
  errorview: {
    justifyContent: "center",
    alignContent: "center"
  },
  imback: {
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth / 1.05,
    height: screenWidth / 3
  },
  itemview: {
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 3,
    elevation: 3,
    zIndex: 999,
    marginVertical: 10
  },
  roomtext: {
    fontSize: 25,
    color: colors.maincolor
  },
  time: {
    fontSize: 15,
    color: colors.black
  },
  redbtn: {
    backgroundColor: "yellow",
    width: screenWidth / 2
  },
  iview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  txt: {
    color: colors.maincolor
  }
});
