import React from 'react'
import { AppRegistry } from 'react-native'

import dva from './utils/dva'
import { routerMiddleware } from './navigation/Router';
import SideMenuWithRouter from './navigation/SideMenuWithRouter';

import appModel from './models/app'
import routerModel from './models/router'
import userModel from './models/UserModel'

const app = dva({
  initialState: {},
  models: [appModel, routerModel, userModel],
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<SideMenuWithRouter/>);

AppRegistry.registerComponent('askilikMobile', () => App)
