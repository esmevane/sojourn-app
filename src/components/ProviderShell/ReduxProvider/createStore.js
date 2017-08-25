// @flow

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import createReducers from './createReducers'
import createSagas from './createSagas'

import type { Store } from 'redux'

export default (): Store => {
  const sagas = createSagaMiddleware()

  const store =
    createStore(
      createReducers(),
      composeWithDevTools(
        applyMiddleware(sagas)
      )
    )

  sagas.run(createSagas())

  return store
}
