// @flow

import React from 'react'
import { expect } from 'chai'
import * as State from './state'
import SwitchLifecycle from './index'

class AnimationSpy {
  springCalledWith = [null, null]
  spring(...args) { this.springCalledWith = args }
}

describe('SwitchLifecycle', () => {
  it('starts with a basic animation state', () => {
    const lifecycle = new SwitchLifecycle({})

    expect(lifecycle.state).to.eql(State.init())
  })

  describe('componentWillAppear', () => {
    it('triggers an animation', () => {
      const spy = new AnimationSpy()
      const animation = spy.spring.bind(spy)
      const lifecycle = new SwitchLifecycle({ animation })

      lifecycle.componentWillAppear()

      expect(spy.springCalledWith).to.contain(
        'AnimationEnd',
        State.init()
      )
    })
  })

  describe('componentWillEnter', () => {
    it('triggers an animation', () => {
      const spy = new AnimationSpy()
      const animation = spy.spring.bind(spy)
      const lifecycle = new SwitchLifecycle({ animation })

      lifecycle.componentWillAppear()

      expect(spy.springCalledWith).to.contain(
        'AnimationEnd',
        State.init()
      )
    })
  })

  describe('componentWillLeave', () => {
    it('triggers an animation', () => {
      const spy = new AnimationSpy()
      const animation = spy.spring.bind(spy)
      const lifecycle = new SwitchLifecycle({ animation })

      lifecycle.componentWillLeave()

      expect(spy.springCalledWith).to.contain(
        'AnimationStart',
        State.init()
      )
    })
  })
})
