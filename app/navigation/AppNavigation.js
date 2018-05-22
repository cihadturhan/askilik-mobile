import { StackNavigator, SwitchNavigator } from "react-navigation"

import { customNavigationOptions } from "./util"
import LoginScreen from "../containers/LoginScreen"
import SignUpScreen from "../containers/SignUpScreen"
import ConceptsScreen from "../containers/ConceptsScreen"
import ConceptDetailScreen from "../containers/ConceptDetailScreen"
import ProfileScreen from "../containers/ProfileScreen"
import LoadingScreen from "../containers/LoadingScreen"

const NonAuthStack = StackNavigator({
  LoadingScreen: { screen: LoadingScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen }
}, {
  // Default config for all screens
  initialRouteName: "LoadingScreen",
  navigationOptions: customNavigationOptions
})

const ConceptStack = StackNavigator({
    ConceptsScreen: { screen: ConceptsScreen },
    ConceptDetailScreen: { screen: ConceptDetailScreen }
  },
  {
    // Default config for all screens
    initialRouteName: "ConceptsScreen",
    navigationOptions: customNavigationOptions
  }
)

const ProfileStack = StackNavigator({
    ProfileScreen: { screen: ProfileScreen }
  },
  {
    // Default config for all screens
    initialRouteName: "ProfileScreen",
    navigationOptions: customNavigationOptions
  }
)

const AuthSwitch = SwitchNavigator({
  ConceptStack: { screen: ConceptStack },
  ProfileStack: { screen: ProfileStack }
}, {
  initialRouteName: "ConceptStack"
})

const AppNavigation = SwitchNavigator({
    NonAuthStack: { screen: NonAuthStack },
    AuthSwitch: { screen: AuthSwitch }
  },
  {
    // Default config for all screens
    initialRouteName: "NonAuthStack",
    header: "none"
  }
)

export default AppNavigation
