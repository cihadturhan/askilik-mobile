import { StyleSheet, Platform } from 'react-native'
import { Fonts, Colors } from '../../themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 60,
    paddingLeft: 30,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'transparent',

  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 20 : 0, /* only for IOS to give StatusBar Space */
    height: 28,
  },
  ...Fonts,
});
