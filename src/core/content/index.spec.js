// @flow

import { expect } from 'chai'
import * as Store from 'core/store'
import * as Content from './index'

describe('Contents', () => {
  it('exists', () => {
    expect(Content).to.be.ok
  })

  describe('#create', () => {
    const text = '# some text'

    it('promises returned content', () => {
      return Content.create(text)
        .then(content => content.getCurrentContent().getPlainText())
        .then(subject => expect(subject).to.eql(text))
    })
  })

  describe('#update', () => {
    it('promises the updated note', async () => {
      const message = 'A message'
      const original = await Content.init()
      const other = await Content.create(message)

      return Content.update(original, other)
        .then(content => content.getCurrentContent().getPlainText())
        .then(subject => expect(subject).to.eql(message))
    })
  })
})
