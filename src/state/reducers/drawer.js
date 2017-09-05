// @flow

import * as Actions from 'state/actions'

const defaults: Showable = { show: false }

const drawer = (state: Showable = defaults, action: Action): Showable => {
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
