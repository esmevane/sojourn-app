// @flow

import { createBrowserHistory, createMemoryHistory } from 'history'

const createHistory = process.env.NODE_ENV === 'test'
  ? createMemoryHistory
  : createBrowserHistory

export default createHistory
