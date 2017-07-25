// @flow

import { expect } from 'chai'
import * as State from './state'
import * as Styles from './styles'

describe('create', () => {
  const { animate: animatedValue } = State.init()

  it('provides opacity and transform properties', () => {
    expect(Styles.create(animatedValue)).to.have.keys('opacity', 'transform')
  })
})
