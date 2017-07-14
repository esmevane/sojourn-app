// @flow

import * as Actions from 'actions'

const defaults: DrawerState = { show: false }

const drawer = (
  state: DrawerState = defaults,
  action: Action
): DrawerState => {
  switch (action.type) {
    case Actions.HideDrawer:
      return { ...state, show: false }
    case Actions.ShowDrawer:
      return { ...state, show: true }
    default:
      return { ...state }
  }
}

export default drawer
