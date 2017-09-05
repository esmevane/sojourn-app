// @flow

import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import MaybeViewer from './MaybeViewer'
import Editor from './Editor'

const editableRegion = ({ location }: HasLocation): React$Element<any> =>
  <Switch key={location.key} location={location}>
    <Route exact path="/edit/:path*" component={Editor} />
    <Route exact path="/:path*" component={MaybeViewer} />
  </Switch>

const EditablePage = (): React$Element<any> => <Route render={editableRegion} />

export default EditablePage
