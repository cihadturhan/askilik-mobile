import React, { Component } from "react"
import { Text } from "react-native"
import { connect } from "react-redux"
import CustomScrollAwareView from "../components/CustomScrollAwareView"
import styles from "./styles/ProfileScreenStyle"

@connect((_) => ({}))
class ProfileScreen extends Component {
  static navigationOptions = {
    title: "",
    hideBack: true
  }

  render() {
    const _ = this.props

    return (
      <CustomScrollAwareView style={styles.container}>
        <Text>Profil</Text>
      </CustomScrollAwareView>
    )
  }
}

export default ProfileScreen
