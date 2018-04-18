import React from "react"
import CustomHeader from "../components/CustomHeader"

// eslint-disable
export const customNavigationOptions = props => ({
  header: headerProps => <CustomHeader {...{ ...headerProps, ...props }}/>
})
