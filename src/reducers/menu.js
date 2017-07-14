// @flow

import * as Actions from 'actions'

const defaults: MenuState = { show: false }

const menu = (
  state: MenuState = defaults,
  action: Action
): MenuState => {
  switch (action.type) {
    case Actions.HideMenu:
      return { ...state, show: false }
    case Actions.ShowMenu:
      return { ...state, show: true }
    default:
      return { ...state }
  }
}

export default menu
