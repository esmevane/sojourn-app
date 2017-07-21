// @flow

import React from 'react'
import RouterProvider from 'components/App/RouterProvider'
import ReduxProvider from 'components/App/ReduxProvider'

type ShellProps = { children?: any }

const maybeFirstChild = children =>
  React.Children.toArray(children)[0] || <div />

const Shell = ({ children }: ShellProps): React$Element<any> =>
  <RouterProvider>
    <ReduxProvider>
      { maybeFirstChild(children) }
    </ReduxProvider>
  </RouterProvider>

export default Shell
