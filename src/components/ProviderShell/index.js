// @flow

import React from 'react'
import RouterProvider from './RouterProvider'
import ReduxProvider from './ReduxProvider'

type ProviderShellProps = { children?: any }

const maybeFirstChild = children =>
  React.Children.toArray(children)[0] || <div />

const ProviderShell = ({
  children
}: ProviderShellProps): React$Element<any> => (
  <RouterProvider>
    <ReduxProvider>{maybeFirstChild(children)}</ReduxProvider>
  </RouterProvider>
)

export default ProviderShell
