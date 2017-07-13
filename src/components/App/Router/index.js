// @flow

import React from 'react'
import { Router as RouterDom } from 'react-router-dom'
import createHistory from './createHistory'

type RouterProps = { children?: React$Element<any> }

const history = createHistory()

const Router = ({ children }: RouterProps): React$Element<any> =>
  <RouterDom history={ history }>{ children }</RouterDom>

export default Router
