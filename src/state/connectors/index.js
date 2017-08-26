// @flow

import { connect } from 'react-redux'

export const connectMenu = connect((state: State): MenuState => ({
  show: state.ui.menu.show
}))

export const connectDrawer = connect((state: State): MenuState => ({
  show: state.ui.menu.show
}))

export const connectModal = connect((state: State): MenuState => ({
  show: state.ui.menu.show
}))
