// @flow

import React from 'react'
import { Provider } from 'react-redux'
import * as State from 'state'

type ProviderProps = { children?: React$Element<any> }

const store = State.createStore()
const ReduxProvider = ({ children }: ProviderProps): React$Element<any> =>
  <Provider store={store}>
    {children}
  </Provider>

export default ReduxProvider
