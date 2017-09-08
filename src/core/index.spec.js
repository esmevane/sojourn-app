// @flow

import { expect } from 'chai'
import Core, * as CoreLibs from './index'

describe('Core', () => {
  it('is exported', () => {
    expect(Core).to.be.ok
  })

  describe('Libs', () => {
    it('exports Notes', () => {
      expect(CoreLibs.Notes).to.be.ok
    })

    it('exports Store', () => {
      expect(CoreLibs.Store).to.be.ok
    })
  })
})
