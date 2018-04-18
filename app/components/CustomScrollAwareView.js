import React from "react"
import { ScrollView } from "react-native"
import styles from "./styles/CustomScrollAwareViewStyle"

const CustomScrollAwareView = props => (
  <ScrollView style={styles.mainContainer}
              contentContainerStyle={styles.containerContent}
              keyboardShouldPersistTaps="handled"
              {...props}
  />
)

CustomScrollAwareView.propTypes = {}

export default CustomScrollAwareView
