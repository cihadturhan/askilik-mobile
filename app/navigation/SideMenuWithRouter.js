import React, { PureComponent } from "react"
import { View } from "react-native"
import Drawer from "react-native-drawer"
import Router from "./Router"

import LeftMenuScreen from "../containers/MenuScreen"
import CustomToast from "../components/CustomToast"

export default class SideMenuWithRouter extends PureComponent {

  constructor() {
    super()
    this.openDrawer = this.openDrawer.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)
  }

  openDrawer() {
    this.drawer.open()
  }

  closeDrawer() {
    this.drawer.close()
  }

  render() {
    const drawerMethods = {
      openDrawer: this.openDrawer,
      closeDrawer: this.closeDrawer
    }

    return (<View style={{ flex: 1 }}>
      <Drawer
        ref={ref => {
          this.drawer = ref
        }}
        type="displace"
        animation="easeInOut"
        content={<LeftMenuScreen drawerMethods={drawerMethods}/>}
        tapToClose
        openDrawerOffset={viewport => viewport.width - 180}
        panOpenMask={-1}
      >
        <Router screenProps={drawerMethods}/>
      </Drawer>
      <CustomToast/>
    </View>)
  }
}
