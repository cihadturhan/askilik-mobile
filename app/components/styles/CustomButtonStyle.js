import { StyleSheet } from "react-native"
import { Fonts, Colors } from "../../themes/"

export default StyleSheet.create({
  container: {
    marginLeft: 0,
    marginRight: 0,
    flex: 1
  },
  button: {
    height: 48,
    paddingTop: 0,
    paddingBottom: 0
  },
  buttonPrimary: {
    backgroundColor: Colors.fullWhite
  },
  buttonPrimaryText: {
    ...Fonts.buttonPrimary
  },
  buttonSecondary: {
    backgroundColor: "transparent"
  },
  buttonSecondaryText: {
    ...Fonts.buttonSecondary
  },
  buttonOutline: {},
  buttonOutlineText: {}
})
