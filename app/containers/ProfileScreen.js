import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import { connect } from "react-redux"
import CustomScrollAwareView from "../components/CustomScrollAwareView"
import styles from "./styles/ProfileScreenStyle"
import BackgroundOverlay from "../components/BackgroundOverlay"
import { Images } from "../themes"

@connect(({ userModel }) => ({ userModel }))
class ProfileScreen extends Component {
  static navigationOptions = {
    title: "",
    hideBack: true
  }

  render() {
    const { userModel: { user } } = this.props

    if (user === null) {
      return null
    }

    const { displayName, photoURL } = user

    return (
      <View style={[styles.mainContainer, { position: "relative" }]}>
        <BackgroundOverlay source={Images.profile}/>
        <CustomScrollAwareView style={{}}>

          <Text style={styles.title1}>{displayName}</Text>
          <Text style={styles.subtitle}>14.2k takipci</Text>

          <Image source={{ uri: photoURL }} style={{ marginTop: 32, width: 64, height: 64 }}/>

          <View style={{ flexDirection: "row", marginTop: 32 }}>

            <View style={{ flex: 1 }}>
              <Text style={styles.titleStats}>323</Text>
              <Text style={styles.subtitleImage}>BEĞENİ</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.titleStats}>1231</Text>
              <Text style={styles.subtitleImage}>TAKİP</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.titleStats}>1232</Text>
              <Text style={styles.subtitleImage}>TAKİPÇİ</Text>
            </View>
          </View>
        </CustomScrollAwareView>
      </View>
    )
  }
}

export default ProfileScreen
