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

  render() {
    const _ = this.props


    return (
      <View style={[styles.mainContainer, { position: "relative" }]}>
        <BackgroundOverlay source={Images.register}/>
        <CustomScrollAwareView style={{}}>
          <View style={[styles.container, { backgroundColor: "transparent" }]}>

            <Text style={styles.title1}>KAYIT OL</Text>
            <Text style={styles.subTitle}>Hayatını Kaydet</Text>

            <View style={loginStyles.form}>
              <CustomFormLabel>AD</CustomFormLabel>
              <CustomFormInput placeholder="Mehmet Yılmaz"/>

              <CustomDivider/>

              <CustomFormLabel>EMAIL</CustomFormLabel>
              <CustomFormInput placeholder="abc@gmail.com" keyboardType="email-address"/>

              <CustomDivider/>

              <CustomFormLabel>ŞİFRE</CustomFormLabel>
              <CustomFormInput placeholder="*******" secureTextEntry={true}/>
            </View>

            <View style={{ marginTop: 24 }}>
              <CustomButton title="KAYIT OL" type="primary"/>
            </View>
          </View>
        </CustomScrollAwareView>
      </View>
    )
  }
}

export default SignUpScreen
