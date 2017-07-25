// @flow

import { expect } from 'chai'
import * as State from './state'

class AnimationSpy implements Animator {
  springArguments = [null, null]
  startCalled = false

  spring(...args) {
    this.springArguments = args
    return this
  }

  start() { this.startCalled = true }
}


describe('init', () => {
  it('creates an animation state with a 0 value', () => {
    expect(State.animationValueOf(State.init())).to.eql(State.StartValue)
  })
})

describe('spring', () => {
  describe('starting animation', () => {
    const spy = new AnimationSpy()
    const { animate: animatedValue } = State.init()
    const Animation = State.spring(spy)

    Animation('AnimationStart', animatedValue)

    const [ value, config ] = spy.springArguments

    it('calls start on the animator', () => {
      expect(spy.startCalled).to.be.ok
    })

    it('passes the animated value to the animator', () => {
      expect(value).to.eql(animatedValue)
    })

    it('passes { toValue: 1 } to the animator', () => {
      expect(config).to.eql({ toValue: 0 })
    })
  })

  describe('ending animation', () => {
    const spy = new AnimationSpy()
    const { animate: animatedValue } = State.init()
    const Animation = State.spring(spy)

    Animation('AnimationEnd', animatedValue)

    const [ value, config ] = spy.springArguments

    it('calls start on the animator', () => {
      expect(spy.startCalled).to.be.ok
    })

    it('passes the animated value to the animator', () => {
      expect(value).to.eql(animatedValue)
    })

    it('passes { toValue: 1 } to the animator', () => {
      expect(config).to.eql({ toValue: 1 })
    })
  })
})
