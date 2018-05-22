import React, { Component } from "react"
import { Text, View } from "react-native"
import { connect } from "react-redux"
import CustomScrollAwareView from "../components/CustomScrollAwareView"
import styles from "./styles/LoginScreenStyle"
import { Images } from "../themes"
import BackgroundOverlay from "../components/BackgroundOverlay"
import CustomDivider from "../components/CustomDivider"
import CustomFormInput from "../components/CustomFormInput"
import CustomFormLabel from "../components/CustomFormLabel"
import CustomButton from "../components/CustomButton"

@connect((_) => ({}))
class LoginScreen extends Component {
  static navigationOptions = {
    title: "",
    hideMenu: true,
    hideBack: true
  }

  state = {
    email: "",
    password: ""
  }

  handleLoginPress = () => {
    const { email, password } = this.state
    this.props.dispatch({ type: "userModel/signInWithPassword", payload: { email, password } })
  }

  handleFacebookLoginPress = () => {
    this.props.dispatch({ type: "userModel/signInWithFacebook" })
  }

  handleTextChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    const { email, password } = this.state


    return (
      <View style={[styles.mainContainer, { position: "relative" }]}>
        <BackgroundOverlay source={Images.login}/>
        <CustomScrollAwareView style={{}}>
          <View style={[styles.container, { backgroundColor: "transparent" }]}>

            <Text style={styles.title1}>ASKILIK</Text>
            <Text style={styles.subTitle}>Hayatını Kaydet</Text>

            <View style={styles.form}>
              <CustomFormLabel>E-POSTA</CustomFormLabel>
              <CustomFormInput placeholder="abc@gmail.com" value={email} keyboardType="email-address"
                               onChangeText={text => this.handleTextChange("email", text)}/>

              <CustomDivider/>

              <CustomFormLabel>ŞİFRE</CustomFormLabel>
              <CustomFormInput placeholder="*******" value={password} secureTextEntry
                               onChangeText={text => this.handleTextChange("password", text)}/>
            </View>

            <View style={{ marginTop: 24 }}>
              <CustomButton title="GİRİŞ YAP" type="primary" onPress={this.handleLoginPress}/>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 24 }}>
              <View style={{ flexDirection: "row", justifyContent: "center", width: "50%", alignItems: "center" }}>
                <CustomDivider/>
                <Text style={{ marginHorizontal: 5, lineHeight: 12 }}>veya</Text>
                <CustomDivider/>
              </View>
            </View>

            <View style={{ marginTop: 24 }}>
              <CustomButton title="FACEBOOK" type="primary" onPress={this.handleFacebookLoginPress}/>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 24 }}>
              <CustomButton title="HESAP OLUŞTUR" type="secondary"
                            onPress={() => this.props.navigation.navigate("SignUpScreen")}/>
              <CustomButton title="YARDIM AL" type="secondary"/>
            </View>
          </View>
        </CustomScrollAwareView>
      </View>
    )
  }
}

export default LoginScreen
