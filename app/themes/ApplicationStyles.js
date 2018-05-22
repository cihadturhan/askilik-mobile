import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.fullWhite,
    },
    container: {
      flex: 1,
      backgroundColor: Colors.fullWhite,
    },
    containerContent: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 86,
      paddingBottom: 16,
    }
  },
};

export default ApplicationStyles
