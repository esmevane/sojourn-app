// @flow

import { expect } from 'chai'
import NoteEntity from './index'

describe('NoteEntity', () => {
  const id = 'some-id-string'
  const title = 'An Article'
  const content = '# Hello!'
  const entity = new NoteEntity({ id, title, content })

  it('has an id', () => {
    expect(entity.id).to.eql(id)
  })

  it('has a title', () => {
    expect(entity.title).to.eql(title)
  })

  it('has content', () => {
    expect(entity.content).to.eql(content)
  })

  describe('#isEmpty', () => {
    it('is empty when brand new', () => {
      expect(new NoteEntity().isEmpty()).to.be.true
    })
  })
})
