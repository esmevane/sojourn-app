// @flow

import { combineReducers } from 'redux'

import pages from 'state/reducers/pages'
import modal from 'state/reducers/modal'
import menu from 'state/reducers/menu'
import drawer from 'state/reducers/drawer'

export default () =>
  combineReducers({
    pages,
    ui: combineReducers({ drawer, menu, modal })
  })
