import { StyleSheet } from "react-native"
import { Fonts, Colors } from "../../themes/"

export default StyleSheet.create({
  container: { marginTop: 32 },
  divider: {
    marginTop: 32,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: Colors.lightGray3
  },
  ...Fonts
})
