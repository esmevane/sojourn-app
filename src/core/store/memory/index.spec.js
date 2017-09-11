// @flow

import { expect } from 'chai'
import Memory from './index'

describe('Memory', () => {
  const store = new Memory()

  describe('#all', () => {
    it('returns all inserted items', () => {
      const value = 'hey'
      store.put('anything', value)

      return store
        .all()
        .then(contents => expect(contents).to.eql([value]))
    })
  })

  describe('#get', () => {
    it("returns null if it doesn't have a value", () => {
      return store
        .get('nothing')
        .then(subject => expect(subject).to.be.undefined)
    })
  })

  describe('#put', () => {
    it('puts the given item in the given key', () => {
      const key = 'some-id-probably'
      const value = {}

      return store
        .put(key, value)
        .then(() => store.get(key))
        .then(subject => expect(subject).to.eql(value))
    })
  })

  describe('remove', () => {
    it('removes the given key', () => {
      const key = 'some-id-probably'
      const value = 'Hooray!'

      return store
        .put(key, value)
        .then(() => store.get(key))
        .then(subject => expect(subject).to.eql(value))
        .then(() => store.remove(key))
        .then(subject => expect(subject).to.be.undefined)
    })
  })
})
