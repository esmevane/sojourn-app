// @flow

import * as Actions from 'state/actions'

const defaults: Showable = { show: false }

const modal = (state: Showable = defaults, action: Action): Showable => {
  switch (action.type) {
    case Actions.HideModal:
      return { ...state, show: false }
    case Actions.ShowModal:
      return { ...state, show: true }
    default:
      return { ...state }
  }
}

export default modal
