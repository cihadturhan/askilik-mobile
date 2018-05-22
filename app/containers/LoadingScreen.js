import React, { Component } from "react"
import { View, ActivityIndicator } from "react-native"
import { connect } from "react-redux"
import CustomScrollAwareView from "../components/CustomScrollAwareView"
import styles from "./styles/LoadingScreenStyle"

@connect((_) => ({}))
class LoadingScreen extends Component {
  static navigationOptions = {
    title: "",
    header: null
  }

  render() {
    const _ = this.props

    return (
      <CustomScrollAwareView style={styles.container}>
        <View>
          <ActivityIndicator />
        </View>
      </CustomScrollAwareView>
    )
  }
}

export default LoadingScreen
