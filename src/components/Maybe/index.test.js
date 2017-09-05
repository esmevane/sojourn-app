// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Maybe from './index'

const FirstPage = () => <div />
const SecondPage = () => <div />

describe('Maybe', () => {
  describe('if conditional evaluates to true', () => {
    const condition = props => true
    const maybe = shallow(
      <Maybe condition={condition}>
        <FirstPage />
        <SecondPage />
      </Maybe>
    )

    it('displays the first component', () => {
      expect(maybe.find('FirstPage')).to.have.length(1)
      expect(maybe.find('SecondPage')).to.have.length(0)
    })
  })

  describe('otherwise', () => {
    const condition = props => false
    const maybe = shallow(
      <Maybe condition={condition}>
        <FirstPage />
        <SecondPage />
      </Maybe>
    )

    it('displays the second page', () => {
      expect(maybe.find('FirstPage')).to.have.length(0)
      expect(maybe.find('SecondPage')).to.have.length(1)
    })
  })
})
