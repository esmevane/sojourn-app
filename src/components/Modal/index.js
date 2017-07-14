// @flow

import { connect } from 'react-redux'
import View from './view'

const mapStateToProps = (state: State): ModalState => (
  { show: state.ui.modal.show }
)

export default connect(mapStateToProps)(View)
