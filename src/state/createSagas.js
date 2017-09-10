// @flow

import { fork } from 'redux-saga/effects'
import { echo, pages } from 'state/sagas'

const createSagas = () =>
  function*(): Generator<*, *, *> {
    yield fork(echo)
    yield fork(pages)
  }

export default createSagas
