// @flow

import { expect } from 'chai'
import Pouch from './index'

describe('Pouch', () => {
  describe('#all', () => {
    it('returns all inserted items', async () => {
      const store = new Pouch()
      const value = 'hey'
      await store.put('anything', value)

      const contents = await store.all()

      return expect(contents).to.eql([value])
    })
  })

  describe('#get', () => {
    it("returns null if it doesn't have a value", async () => {
      const store = new Pouch()
      const subject = await store.get('nothing')

      return expect(subject).to.be.undefined
    })
  })

  describe('#put', () => {
    it('puts the given item in the given key', async () => {
      const store = new Pouch()
      const key = 'some-id-probably'
      const value = { blends: 'what' }

      await store.put(key, value)

      const subject = await store.get(key)

      return expect(subject).to.eql(value)
    })
  })

  describe('remove', () => {
    it('removes the given key', () => {
      const store = new Pouch()
      const key = 'some-id-probably'
      const value = 'Hooray!'

      return (
        store
          .put(key, value)
          // .then(() => store.get(key))
          // .then(subject => expect(subject).to.eql(value))
          .then(() => store.remove(key))
          .then(subject => expect(subject).to.be.undefined)
      )
    })
  })
})
