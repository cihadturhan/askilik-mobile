import { StyleSheet, Platform } from 'react-native';
import { Fonts, Colors } from '../../themes/';

export default StyleSheet.create({
  ...Fonts,
  container: {
    height: 'auto',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: Platform.OS === 'ios' ? 8 + 12 : 8,
    justifyContent: 'center',
    zIndex: 99999999,
  },
  text: {
    color: Colors.fullWhite,
    textAlign: 'center'
  },
  default: {},
  info: {
    backgroundColor: Colors.darkGray3,
  },
  success: {
    backgroundColor: Colors.darkGray1,
  },
  danger: {
    backgroundColor: Colors.fullBlack,
  }
});
