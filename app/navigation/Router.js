import React, { PureComponent } from "react"
import { Alert, AppState, BackHandler } from "react-native"
import PropTypes from "prop-types"
import {
  addNavigationHelpers,
  NavigationActions
} from "react-navigation"
import {
  initializeListeners,
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers"
import { connect } from "react-redux"

import AppNavigation from "./AppNavigation"

function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}

export const routerMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.router
)
const addListener = createReduxBoundAddListener("root")

@connect(({ router }) => ({ router }))
class Router extends PureComponent {

  static propTypes = {
    screenProps: PropTypes.object
  }

  static defaultProps = {
    screenProps: {}
  }

  state = {
    appState: AppState.currentState
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButtonPress)
    AppState.addEventListener("change", this.handleAppstateChange)
  }

  componentDidMount() {
    initializeListeners("root", this.props.router)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButtonPress)
    AppState.removeEventListener("change", this.handleAppstateChange)
  }

  handleAppstateChange = nextAppState => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === "active") {
      console.log("Foreground")
    } else {
      console.log("Background")
    }
    this.setState({ appState: nextAppState })
  }

  backHandle = () => {
    const { routerModel, dispatch } = this.props
    const currentScreen = getCurrentScreen(routerModel)
    if (currentScreen === "CHANGE_THIS_IF_YOU_NEED_YOUR_APP_EXIT_ON_BACKPRESS") {
      Alert.alert("Exit App", "Are you sure to exit?", [
        { text: "No" },
        { text: "Yes", onPress: () => BackHandler.exitApp(), style: "cancel" }
      ])
      return true
    }

    dispatch(NavigationActions.back())
    return true
  }

  render() {
    const { dispatch, router, screenProps } = this.props

    const navigation = addNavigationHelpers({
      dispatch,
      state: router,
      addListener
    })
    return <AppNavigation navigation={navigation} screenProps={screenProps}/>
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigation.router.getStateForAction(action, state)
}

export default Router
