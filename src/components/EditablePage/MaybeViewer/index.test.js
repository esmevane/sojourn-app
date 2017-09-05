// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { MaybeViewer } from './index'

describe('MaybeViewer', () => {
  const component = shallow(<MaybeViewer />)

  it('renders a Maybe', () => {
    expect(component.find('Maybe').length).to.eql(1)
  })

  it('renders a Viewer', () => {
    expect(component.find('Viewer').length).to.eql(1)
  })

  it('renders an Invitation', () => {
    expect(component.find('Invitation').length).to.eql(1)
  })
})
