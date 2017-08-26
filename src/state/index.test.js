import { expect } from 'chai'
import * as State from './index'

describe('State', () => {
  describe('createStore', () => {
    it('creates Redux store', () => {
      const store = State.createStore()
      expect(store).to.be.ok
    })
  })
})
