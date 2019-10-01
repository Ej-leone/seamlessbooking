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
    fontSize: 20
  },

  errorview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  ld: {
    width: screenWidth / 1.5,
    height: screenHeight / 2
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
    fontSize: 18,
    color: colors.maincolor
  },
  time: {
    fontSize: 15,
    color: colors.black
  },
  redbtn: {
    backgroundColor: colors.maincolor,
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

export const cancelmodal = StyleSheet.create({
  title: {
    color: colors.maincolor,
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center"
  },
  time: {
    color: colors.gray05,
    textAlign: "center",
    fontSize: 15
  },
  buttonview: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  button: {
    backgroundColor: colors.white,

  },
  text: {
    color: colors.black,
    fontWeight: "400",
    fontSize: 15,
    textAlign: "center"
  },
  modalview: {
    backgroundColor: colors.white,
    height: screenHeight / 4,
    width: screenWidth / 1.3,
    borderRadius: 10,

  },
  modaloverview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)"

  },


})

