import { StyleSheet } from "react-native";
import iPhoneSize from "../../helpers/utils";
import colors from "../../styles/colors";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  scrollview: {
    paddingTop: 100
  },
  scrollViewContent: {
    paddingBottom: 80
  },
  categories: {
    marginBottom: 40
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    paddingBottom: 20,
    color: colors.maincolor
  }
});
