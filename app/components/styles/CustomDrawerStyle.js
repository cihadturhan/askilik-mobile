import { StyleSheet } from "react-native"
import { Fonts, Colors } from "../../themes/"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.lightGray3,
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderWidth: 1,
    textAlign: "center"
  },
  ...Fonts
})
