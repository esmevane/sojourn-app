// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import DraftingArea from './index'

describe('DraftingArea', () => {
  const area = shallow(<DraftingArea />)

  it('renders', () => { expect(area).to.be.ok })
})
