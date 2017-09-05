// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { DraftingArea } from './index'
import { Notes } from 'state'

describe('DraftingArea', () => {
  const area = shallow(
    <DraftingArea page={Notes.create()} insertPage={() => {}} />
  )

  it('renders', () => {
    expect(area).to.be.ok
  })
})
