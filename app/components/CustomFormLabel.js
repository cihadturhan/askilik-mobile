import React from "react"
import { FormLabel } from "react-native-elements"
import styles from "./styles/CustomFormLabelStyle"

const CustomFormLabel = props => {
  const _ = props

  return (
    <FormLabel
      containerStyle={styles.container}
      labelStyle={styles.label}>{props.children}</FormLabel>
  )
}

CustomFormLabel.propTypes = {
  ...FormLabel.propTypes
}

export default CustomFormLabel
