// @flow

import { combineReducers } from 'redux'
import modal from 'state/reducers/modal'
import menu from 'state/reducers/menu'
import drawer from 'state/reducers/drawer'

export default () =>
  combineReducers({
    ui: combineReducers({ drawer, menu, modal })
  })
