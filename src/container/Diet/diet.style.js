import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/colors";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  cont: {
    width: width / 1.3,
    backgroundColor: color.white,
    alignSelf: "center",
    borderRadius: 10,
    padding: 10
  },
  title: {
    color: color.black,
    textAlign: "center"
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
    flexDirection: "row",
    justifyContent: "space-between"
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
});
