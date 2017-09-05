// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Viewer from './index'

describe('Viewer', () => {
  const viewer = shallow(<Viewer />)

  it("doesn't explode", () => {
    expect(viewer).to.be.ok
  })
})
