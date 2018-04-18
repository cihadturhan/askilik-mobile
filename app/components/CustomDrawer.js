import React from "react"
import { Text, View } from "react-native"
import styles from "./styles/CustomDrawerStyle"

export default class DrawerContainer extends React.Component {

  static navigationOptions = {
    header: null,
    hideBack: true,
    hideMenu: true,
    title: 'yeah'
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate("ConceptsScreen")}
          style={styles.uglyDrawerItem}>
          Screen 1
        </Text>
        <Text
          onPress={() => navigation.navigate("Concepts2Screen")}
          style={styles.uglyDrawerItem}>
          Screen 2
        </Text>
        <Text
          onPress={() => navigation.navigate("screen3")}
          style={styles.uglyDrawerItem}>
          Screen 3
        </Text>
      </View>
    )
  }
}
