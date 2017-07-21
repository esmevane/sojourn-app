// @flow

import { combineReducers } from 'redux'
import modal from 'reducers/modal'
import menu from 'reducers/menu'
import drawer from 'reducers/drawer'

export default () =>
  combineReducers({
    ui: combineReducers({ drawer, menu, modal })
  })
