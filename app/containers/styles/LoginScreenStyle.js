import { StyleSheet } from "react-native"
import { ApplicationStyles, Fonts, Colors } from "../../themes/"

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...Fonts,
  form: {
    marginTop: 60,
    backgroundColor: Colors.fullWhite,
    paddingHorizontal: 32,
    paddingVertical: 24,
  }
})
