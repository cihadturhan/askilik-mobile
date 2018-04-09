import { Animated, Easing } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { customNavigationOptions } from './util';
import LoginScreen from "../containers/LoginScreen"
import SignUpScreen from "../containers/SignUpScreen"


const AppNavigation = StackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    SignUpScreen: { screen: SignUpScreen },
  },
  {
    // Default config for all screens
    initialRouteName: 'LoginScreen',
    navigationOptions: customNavigationOptions,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)

export default AppNavigation;
