import React from "react"
import { FormInput } from "react-native-elements"
import styles from "./styles/CustomFormInputStyle"
import { Colors } from '../themes'

const CustomFormInput = props => {
  const _ = props

  return (
    <FormInput
      containerStyle={styles.container}
      inputStyle={styles.input}
      underlineColorAndroid="transparent"
      placeholderTextColor={Colors.lightGray3}
      {...props}
    />
  )
}

CustomFormInput.propTypes = {
  ...FormInput.propTypes
}

export default CustomFormInput
