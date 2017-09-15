// @flow

import { expect } from 'chai'
import Store from './index'

describe('Store', () => {
  it('exposes Memory', () => {
    expect(Store.Memory).to.be.ok
  })

  it('exposes Pouch', () => {
    expect(Store.Pouch).to.be.ok
  })
})
