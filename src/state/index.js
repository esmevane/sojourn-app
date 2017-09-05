// @flow

import * as Redux from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import createReducers from './createReducers'
import createSagas from './createSagas'

export * from './connectors'
export * from './entities'

export const createStore = (): Redux.Store => {
  const sagas = createSagaMiddleware()

  const store = Redux.createStore(
    createReducers(),
    composeWithDevTools(Redux.applyMiddleware(sagas))
  )

  sagas.run(createSagas())

  return store
}
