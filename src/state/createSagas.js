// @flow

import { fork } from 'redux-saga/effects'
import { echo } from 'state/sagas'

const createSagas = () =>
  function*(): Generator<*, *, *> {
    yield fork(echo)
  }

export default createSagas
