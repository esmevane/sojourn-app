// @flow

import React from 'react'
import { Route } from 'react-router-dom'

import Invitation from './Invitation'
import Editor from './Editor'

import SlideSwitch from 'components/SlideSwitch'

const editableRegion = ({ location }: HasLocation): React$Element<any> =>
  <SlideSwitch key={ location.key } location={ location }>
    <Route exact path="/edit" component={ Editor } />
    <Route exact path="/" component={ Invitation } />
  </SlideSwitch>

const EditablePage = (): React$Element<any> =>
  <Route render={ editableRegion } />

export default EditablePage
