// @flow

import React from 'react'

import ProviderShell from 'components/ProviderShell'
import Sojourn from 'components/Sojourn'

const App = (props: any): React$Element<any> =>
  <ProviderShell>
    <Sojourn />
  </ProviderShell>

export default App
