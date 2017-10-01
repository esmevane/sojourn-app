// @flow

import { connect } from 'react-redux'
import * as Actions from 'state/actions'

const { hideOverlay, showOverlay } = Actions

export const connectOverlay = connect((state: State): Showable => ({
  show: state.ui.overlay.show
}))

export const controlsOverlay = connect(null, {
  hideOverlay,
  showOverlay
})
