import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../themes/'

export default StyleSheet.create({
  container: {},
  ...Fonts,
  listItem: {
    borderBottomWidth: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 26,
  },
  listIcon: {
    color: Colors.lightGray
  }
});
