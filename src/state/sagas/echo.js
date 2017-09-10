// @flow

import { delay } from 'redux-saga'
import { call, takeEvery } from 'redux-saga/effects'
import { Echo } from 'state/actions'

export const log = function*(action: Action): Generator<*, *, *> {
  yield call(delay, 300)
  yield call([console, console.log], 'Echoing', action)
}

export const echo = function*(): Generator<*, *, *> {
  yield takeEvery(Echo, log)
}
