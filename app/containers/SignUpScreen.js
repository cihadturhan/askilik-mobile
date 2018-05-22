import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"
import CustomScrollAwareView from "../components/CustomScrollAwareView"
import styles from "./styles/SignUpScreenStyle"
import loginStyles from "./styles/LoginScreenStyle"
import { Images } from "../themes"
import BackgroundOverlay from "../components/BackgroundOverlay"
import CustomDivider from "../components/CustomDivider"
import CustomFormInput from "../components/CustomFormInput"
import CustomFormLabel from "../components/CustomFormLabel"
import CustomButton from "../components/CustomButton"

@connect((_) => ({}))
class SignUpScreen extends Component {
  static navigationOptions = {
    title: "",
    hideMenu: true
  }

  state = {
    displayName: "",
    email: "",
    password: ""
  }

  signInWithPassword = () => {
    const { email, password, displayName } = this.state
    this.props.dispatch({
      type: "userModel/createWithPassword",
      payload: { email, password, displayName }
    })
  }

  handleTextChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    const { email, password, displayName } = this.state

    return (
      <View style={[styles.mainContainer, { position: "relative" }]}>
        <BackgroundOverlay source={Images.register}/>
        <CustomScrollAwareView style={{}}>
          <View style={[styles.container, { backgroundColor: "transparent" }]}>

            <Text style={styles.title1}>KAYIT OL</Text>
            <Text style={styles.subTitle}>Hayatını Kaydet</Text>

            <View style={loginStyles.form}>
              <CustomFormLabel>AD</CustomFormLabel>
              <CustomFormInput
                value={displayName}
                placeholder="Mehmet Yılmaz"
                onChangeText={text => this.handleTextChange("displayName", text)}
              />

              <CustomDivider/>

              <CustomFormLabel>EMAIL</CustomFormLabel>
              <CustomFormInput
                value={email}
                placeholder="abc@gmail.com"
                keyboardType="email-address"
                onChangeText={text => this.handleTextChange("email", text)}
              />

              <CustomDivider/>

              <CustomFormLabel>ŞİFRE</CustomFormLabel>
              <CustomFormInput
                value={password}
                placeholder="*******"
                secureTextEntry
                onChangeText={text => this.handleTextChange("password", text)}
              />
            </View>

            <View style={{ marginTop: 24 }}>
              <CustomButton title="KAYIT OL" type="primary" onPress={this.signInWithPassword}/>
            </View>
          </View>
        </CustomScrollAwareView>
      </View>
    )
  }
}

export default SignUpScreen
