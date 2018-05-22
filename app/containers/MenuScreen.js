import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"
import { NavigationActions } from "react-navigation"
import { List, Divider } from "react-native-elements"

import { Colors } from "../themes"
import styles from "./styles/MenuScreenStyle"
import MenuListItem from "../components/MenuListItem"


@connect(() => ({}))
class MenuScreen extends Component {

  static navigationOptions = {
    title: "",
    header: null
  }

  navigate = routeName => {
    const { dispatch, drawerMethods } = this.props
    const action = NavigationActions.navigate({ routeName })
    dispatch(action)
    drawerMethods.closeDrawer()
  }

  signOut = () => {
    const { dispatch, drawerMethods } = this.props
    dispatch({ type: "userModel/signOut" })
    drawerMethods.closeDrawer()
  }


  render() {

    const _ = this.props

    const iconRest = { type: "feather", size: 18, color: Colors.midGray1, style: { marginRight: 24 } }

    return (
      <View style={styles.container}>

        <List containerStyle={styles.list}>
          <MenuListItem leftIcon={{ name: "triangle", ...iconRest }} title="Akışlar" onPress={() => {
            this.navigate("ConceptStack")
          }}/>
          <MenuListItem leftIcon={{ name: "square", ...iconRest }} title="Profil" onPress={() => {
            this.navigate("ProfileStack")
          }}/>
          <MenuListItem leftIcon={{ name: "octagon", ...iconRest }} title="Ayarlar" onPress={() => {
            this.navigate("SettingsScreen")
          }}/>

          <MenuListItem leftIcon={{ name: "help-circle", ...iconRest }} title="Yardım" onPress={() => {
            this.navigate("HelpScreen")
          }}/>

          <MenuListItem leftIcon={{ name: "log-out", ...iconRest }} title="Çıkış Yap" onPress={this.signOut}/>

        </List>
      </View>
    )
  }
}


export default MenuScreen
