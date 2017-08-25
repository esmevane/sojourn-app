// @flow

import React from 'react'
import { Router } from 'react-router-dom'
import createHistory from './createHistory'

type RouterProps = { children?: React$Element<any> }

const history = createHistory()

const RouterProvider = ({ children }: RouterProps): React$Element<any> =>
  <Router history={ history }>{ children }</Router>

export default RouterProvider
