// @flow

import { expect } from 'chai'
import Store from './index'

describe('Store', () => {
  it('exposes Gun', () => {
    expect(Store.Gun).to.be.ok
  })

  it('exposes Memory', () => {
    expect(Store.Memory).to.be.ok
  })
})
