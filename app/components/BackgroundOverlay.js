import React from "react"
import { View, Image } from "react-native"
import styles from "./styles/BackgroundOverlayStyle"


const BackgroundOverlay = props => (
  <View style={styles.container}>
    <Image {...props} style={styles.image}/>
  </View>
)

BackgroundOverlay.propTypes = {
  ...Image.propTypes
}

export default BackgroundOverlay
