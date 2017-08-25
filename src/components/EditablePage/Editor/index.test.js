// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Editor from './index'

describe('Editor', () => {
  const editor = shallow(<Editor />)

  it('renders a DraftingArea', () => {
    expect(editor.find('DraftingArea')).to.have.length(1)
  })

  it('renders a Link back', () => {
    expect(editor.find('Link')).to.have.length(1)
  })
})
