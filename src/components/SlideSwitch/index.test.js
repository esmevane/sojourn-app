// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import SlideSwitch from './index'

describe('SlideSwitch', () => {
  const location = { key: 'key' }
  const slideSwitch = shallow(<SlideSwitch location={ location } />)
  const lifecycle = slideSwitch.find('SwitchLifecycle')

  it('renders a TransitionGroup', () => {
    expect(slideSwitch.find('TransitionGroup')).to.have.length(1)
  })

  it('renders a lifecycle handler', () => {
    expect(slideSwitch.find('SwitchLifecycle')).to.have.length(1)
  })

  it('gives the lifecycle handler a location prop', () => {
    expect(lifecycle.prop('location')).to.eql(location)
  })

  it('gives the lifecycle handler a key prop', () => {
    expect(lifecycle.key()).to.eql(location.key)
  })
})
