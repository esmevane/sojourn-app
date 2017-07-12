// @flow

// import { delay } from "redux-saga"
import { fork, takeEvery } from "redux-saga/effects"

const log = function* (action) { yield console.log(action) }
const echo = function* () { yield takeEvery('echo', log) }

const createSagas = () =>
  function* (): Generator<*, *, *> { yield fork(echo) }

export default createSagas
