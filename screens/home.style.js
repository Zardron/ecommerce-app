import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "bold",
    fontSize: 40,
  },
  appBarWrapper: {
    marginHorizontal: 10,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    right: -7,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    zIndex: 9999,
  },
  cartNumber: {
    fontFamily: "regular",
    fontWeight: "600",
    fontSize: 12,
    color: COLORS.lightWhite,
  },
});

export default styles;
