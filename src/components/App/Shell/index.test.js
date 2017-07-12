// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './index'

describe('App', () => {
  const app = shallow(<App />)

  it('renders a Provider', () => {
    expect(app.find('Provider')).to.have.length(1)
  })

  it('renders a Router', () => {
    expect(app.find('Router')).to.have.length(1)
  })
})
