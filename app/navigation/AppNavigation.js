import { Animated, Easing } from "react-native"
import { StackNavigator, DrawerNavigator, SwitchNavigator } from "react-navigation"

import { customNavigationOptions } from "./util"
import LoginScreen from "../containers/LoginScreen"
import SignUpScreen from "../containers/SignUpScreen"
import ConceptsScreen from "../containers/ConceptsScreen"
import ConceptDetailScreen from "../containers/ConceptDetailScreen"
import DrawerContainer from "../components/CustomDrawer"

const NonAuthStack = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen }
}, {
  // Default config for all screens
  initialRouteName: "LoginScreen",
  navigationOptions: customNavigationOptions
})

const ConceptStack = StackNavigator({
    ConceptsScreen: { screen: ConceptsScreen },
    ConceptDetailScreen: { screen: ConceptDetailScreen }
  },
  {
    // Default config for all screens
    initialRouteName: "ConceptsScreen",
    // navigationOptions: customNavigationOptions,
    headerMode: "none"
  }
)

const AuthDrawer = DrawerNavigator({
  ConceptStack: { screen: ConceptStack, navigationOptions: { drawerLabel: "Concepts" } },
  ConceptStack2: { screen: ConceptStack, navigationOptions: { drawerLabel: "More Concepts" } }
}, {
  contentComponent: DrawerContainer,
})

const AppNavigation = StackNavigator(
  {
    NonAuthStack: { screen: NonAuthStack },
    AuthDrawer: { screen: AuthDrawer  }
  },
  {
    // Default config for all screens
    initialRouteName: "NonAuthStack",
    navigationOptions: customNavigationOptions,
  }
)

export default AppNavigation
