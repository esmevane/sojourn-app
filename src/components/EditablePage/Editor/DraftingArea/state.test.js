// @flow

import { expect } from 'chai'
import { EditorState } from 'draft-js'
import * as State from './state'

describe('DraftingArea State', () => {

  describe('init', () => {
    it('has an empty editorState', () => {
      const state = State.init()
      const subject =
        state
          .editorState
          .getCurrentContent()
          .getPlainText()

      expect(subject).to.eql('')
    })
  })
})
