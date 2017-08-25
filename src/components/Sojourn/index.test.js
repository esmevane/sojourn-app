// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Sojourn from './index'

describe('Sojourn', () => {
  const sojourn = shallow(<Sojourn />)

  it('renders a Drawer', () => {
    expect(sojourn.find('Connect(Drawer)')).to.have.length(1)
  })

  it('renders a Menu', () => {
    expect(sojourn.find('Connect(Menu)')).to.have.length(1)
  })

  it('renders a Modal', () => {
    expect(sojourn.find('Connect(Modal)')).to.have.length(1)
  })
})
