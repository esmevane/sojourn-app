// @flow

import * as Actions from 'state/actions'

const defaults: Showable = { show: false }

const menu = (state: Showable = defaults, action: Action): Showable => {
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
