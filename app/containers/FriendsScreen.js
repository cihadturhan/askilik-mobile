import React, { Component } from "react"
import { View } from "react-native"
import { connect } from "react-redux"
import CustomScrollAwareView from "../components/CustomScrollAwareView"
import styles from "./styles/FriendsScreenStyle"

class FriendsScreen extends Component {
  static navigationOptions = {
    title: ""
  }

  render() {
    const _ = this.props

    return (
      <CustomScrollAwareView style={styles.container}>
        <View></View>
      </CustomScrollAwareView>
    )
  }
}

export default FriendsScreen
