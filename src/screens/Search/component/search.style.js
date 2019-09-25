import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors/";

const { width, height } = Dimensions.get("window")
export default StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "600",
    paddingBottom: 20,

  },
  tit: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.maincolor
  },
  itemview: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 2,
    // elevation: 3,
    // zIndex: 999,

  },
  imgview: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.maincolor,
    width: width / 1.055,
    height: height / 4,

  },
  modalcontainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  bookview: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: width / 1.2,
    height: height / 3
  },
  title: {
    fontSize: 20,
    color: colors.gray05,
    borderBottomWidth: 1,
  },
  bookbtn: {
    backgroundColor: colors.white
  },
  booktxt: {
    color: colors.maincolor
  },
  cancelbtn: {
    backgroundColor: colors.maincolor
  },
  searchbkbtn: {
    backgroundColor: colors.maincolor,
    width: width / 2,
    justifyContent: "center"
  }

});
