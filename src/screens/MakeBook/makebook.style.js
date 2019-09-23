import { StyleSheet } from "react-native";
import color from "../../styles/colors";
import iPhoneSize from "../../helpers/utils";
const size = iPhoneSize();
let cardSize = 100;
let cardMargin = 8;

if (size === "small") {
  cardSize = 90;
  cardMargin = 4;
} else if (size === "large") {
  cardSize = 105;
}

export default StyleSheet.create({
  wrapper: {
    display: "flex",
    height: "100%",
    flex: 1
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,

    padding: 0,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  container: {
    flex: 1,
    height: "100%"
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  title: {
    color: color.maincolor,
    fontSize: 30,
    fontWeight: "700"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: color.white,
    alignItems: "center",
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 3,
    elevation: 3,
    zIndex: 999,
    width: cardSize,
    height: cardSize,
    marginTop: cardMargin,
    marginBottom: cardMargin,
    marginRight: cardMargin,
    marginLeft: cardMargin
  },
  subtitle: {
    marginTop: 10,
    color: color.gray03,
    fontSize: 20,
    fontWeight: "500"
  },
  mincontainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  btn: {
    marginTop: 10,
    justifyContent: "center",
    height: 40,
    backgroundColor: color.maincolor
  },
  btntxt: {
    color: color.white,
    textAlign: "center"
  }
});
