// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './index'

describe('App', () => {
  const app = shallow(<App />)

  it('renders a ReduxProvider', () => {
    expect(app.find('ReduxProvider')).to.have.length(1)
  })

  it('renders a RouterProvider', () => {
    expect(app.find('RouterProvider')).to.have.length(1)
  })
})
