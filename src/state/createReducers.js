// @flow

import { combineReducers } from 'redux'

import overlay from 'state/reducers/overlay'

export default () =>
  combineReducers({
    ui: combineReducers({ overlay })
  })
