import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,
  }
});
