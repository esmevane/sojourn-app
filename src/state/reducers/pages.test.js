// @flow

import { expect } from 'chai'
import uuid from 'uuid'
import { EditorState } from 'draft-js'

import pages from './pages'
import * as Actions from 'state/actions'
import { Page } from 'state/entities'

describe('pages', () => {
  it('can insert a page', () => {
    const id = uuid.v4()
    const slug = '/'
    const page: Note = new Page({
      id,
      content: EditorState.createEmpty(),
      title: '',
      slug
    })

    const state = pages(undefined, Actions.insertPage(page))
    expect(state.records[slug]).to.eql(page)
  })

  it('can remove a page', () => {
    const id = uuid.v4()
    const slug = '/'
    const page: Note = new Page({
      id,
      content: EditorState.createEmpty(),
      title: '',
      slug
    })

    const state = pages(undefined, Actions.insertPage(page))
    const subject = pages(state, Actions.removePage('/'))

    expect(subject.records[slug]).to.eql(undefined)
  })
})
