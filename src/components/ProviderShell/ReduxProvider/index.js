// @flow

import React from 'react'
import { Provider } from "react-redux"
import createStore from './createStore'

type ProviderProps = { children?: React$Element<any> }

const store = createStore()
const ReduxProvider = ({ children }: ProviderProps): React$Element<any> =>
  <Provider store={ store }>{ children }</Provider>

export default ReduxProvider
