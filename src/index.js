// @flow

import React from 'react'
import { render } from 'react-dom'

import 'typeface-montserrat'
import 'index.css'

import App from 'components/App'
import registerServiceWorker from 'registerServiceWorker'

const root = document.getElementById('root')

render(<App />, root)

registerServiceWorker()

if (module.hot) {
  module.hot.accept('components/App', () => {
    const NextApp = require('components/App').default
    render(<NextApp />, root)
  })
}

registerServiceWorker()
