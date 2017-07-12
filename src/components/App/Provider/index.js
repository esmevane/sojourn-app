// @flow

import React from 'react'
import { Provider as StoreProvider } from "react-redux"
import createStore from './createStore'

type ProviderProps = { children?: React$Element<any> }

const store = createStore()
const Provider = ({ children }: ProviderProps): React$Element<any> =>
  <StoreProvider store={ store }>{ children }</StoreProvider>

export default Provider
