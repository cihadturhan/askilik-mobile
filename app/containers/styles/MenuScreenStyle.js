import { StyleSheet } from "react-native"
import { Fonts } from "../../themes/"

export default StyleSheet.create({
  container: {
    paddingTop: 86,
    flex: 1
  },
  ...Fonts,
  list: {
    borderTopWidth: 0,
    backgroundColor: "transparent",
    paddingLeft: 0
  }
})
