// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './index'

describe('App', () => {
  const app = shallow(<App />)

  it('renders an application Shell', () => {
    expect(app.find('Shell')).to.have.length(1)
  })
})