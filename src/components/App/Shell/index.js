// @flow

import React from 'react'
import Router from 'components/App/Router'
import Provider from 'components/App/Provider'

type ShellProps = { children?: any }

const maybeFirstChild = children =>
  React.Children.toArray(children)[0] || <div />

const Shell = ({ children }: ShellProps): React$Element<any> =>
  <Router>
    <Provider>
      { maybeFirstChild(children) }
    </Provider>
  </Router>

export default Shell
