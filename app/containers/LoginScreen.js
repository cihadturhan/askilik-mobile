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

  render() {
    const _ = this.props


    return (
      <View style={[styles.mainContainer, { position: "relative" }]}>
        <BackgroundOverlay source={Images.login}/>
        <CustomScrollAwareView style={{}}>
          <View style={[styles.container, { backgroundColor: "transparent" }]}>

            <Text style={styles.title1}>ASKILIK</Text>
            <Text style={styles.subTitle}>Hayatını Kaydet</Text>

            <View style={styles.form}>
              <CustomFormLabel>E-POSTA</CustomFormLabel>
              <CustomFormInput placeholder="abc@gmail.com"/>

              <CustomDivider/>

              <CustomFormLabel>ŞİFRE</CustomFormLabel>
              <CustomFormInput placeholder="*******" secureTextEntry={true}/>
            </View>

            <View style={{ marginTop: 24 }}>
              <CustomButton title="GİRİŞ YAP" type="primary"/>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 24 }}>
              <View style={{ flexDirection: "row", justifyContent: "center", width: "50%", alignItems: "center" }}>
                <CustomDivider/>
                <Text style={{ marginHorizontal: 5, lineHeight: 12 }}>veya</Text>
                <CustomDivider/>
              </View>
            </View>

            <View style={{ marginTop: 24 }}>
              <CustomButton title="FACEBOOK" type="primary"/>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 24 }}>
              <CustomButton title="CREATE ACCOUNT" type="secondary" onPress={()=> this.props.navigation.navigate('SignUpScreen')}/>
              <CustomButton title="NEED HELP?" type="secondary"/>
            </View>
          </View>
        </CustomScrollAwareView>
      </View>
    )
  }
}

export default LoginScreen
