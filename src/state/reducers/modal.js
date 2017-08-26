// @flow

import * as Actions from 'state/actions'

const defaults: ModalState = { show: false }

const modal = (state: ModalState = defaults, action: Action): ModalState => {
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
