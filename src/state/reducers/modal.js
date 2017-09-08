// @flow

import * as Actions from 'state/actions'
import showable from 'state/reducers/showable'

export default showable(Actions.HideModal, Actions.ShowModal)
