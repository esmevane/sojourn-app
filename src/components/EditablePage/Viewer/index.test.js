// @flow

import React from 'react'
import { EditorState } from 'draft-js'

import { expect } from 'chai'
import { shallow } from 'enzyme'

import Viewer from './index'

describe('Viewer', () => {
  const page = { content: EditorState.createEmpty() }
  const viewer = shallow(<Viewer page={page} />)

  it("doesn't explode", () => {
    expect(viewer).to.be.ok
  })
})
