// @flow

import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import Invitation from './Invitation'
import Editor from './Editor'

const editableRegion = ({ location }: HasLocation): React$Element<any> =>
  <Switch key={location.key} location={location}>
    <Route exact path="/edit" component={Editor} />
    <Route exact path="/" component={Invitation} />
  </Switch>

const EditablePage = (): React$Element<any> => <Route render={editableRegion} />

export default EditablePage
