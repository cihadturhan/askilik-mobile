import React from "react"
import { View, Text, Image } from "react-native"
import { Divider } from "react-native-elements"
import PropTypes from "prop-types"
import styles from "./styles/FeedItemStyle"
import { Images } from "../themes"

const FeedItem = props => {
  const {
    data: {
      imageIndex, text, createdAt,
      user: {
        name, surname, profileUrl
      }
    }
  } = props

  return (
    <View style={styles.container}>
      <Image source={Images[`image${imageIndex}`]} style={{ width: "100%", height: 135 }}/>
      <View style={{ marginVertical: 12 }}>
        <Text>{text}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: profileUrl }} style={{ width: 40, height: 40 }}/>
        <View style={{ marginLeft: 8 }}>
          <Text style={[styles.textStatusPersona, { marginBottom: 8 }]}>{name} {surname}</Text>
          <Text style={styles.textStatusPersona}>{createdAt}</Text>
        </View>
      </View>
      <Divider style={styles.divider}/>
    </View>
  )
}

FeedItem.propTypes = {
  data: PropTypes.object.isRequired
}

export default FeedItem
