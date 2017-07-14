// @flow

import { connect } from 'react-redux'
import View from './view'

const mapStateToProps = (state: State): MenuState => (
  { show: state.ui.menu.show }
)

export default connect(mapStateToProps)(View)
