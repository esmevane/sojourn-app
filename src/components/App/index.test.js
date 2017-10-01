// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './index'

describe('App', () => {
  const app = shallow(<App />)

  it('renders an application ProviderShell', () => {
    expect(app.find('ProviderShell')).to.have.length(1)
  })

  it('renders the Sojourn component', () => {
    expect(app.find('Connect(Sojourn)')).to.have.length(1)
  })
})
