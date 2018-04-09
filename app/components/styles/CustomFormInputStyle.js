import { StyleSheet } from "react-native"
import { Fonts } from "../../themes"

export default StyleSheet.create({
  container: {
    marginLeft: 0,
    marginRight: 0
  },
  input: {
    ...Fonts.inputForm,
    textAlignVertical: "center"
  }
})
