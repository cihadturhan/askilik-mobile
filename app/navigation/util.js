import React from "react"
import CustomHeader from "../components/CustomHeader"

//eslint-disable no-shadow
export const customNavigationOptions = props => ({
  header: headerProps => <CustomHeader {...{ ...headerProps, ...props }}/>
})
