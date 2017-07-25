// @flow

import React from 'react'
import { Switch } from 'react-router-dom'
import * as Animated from 'animated/lib/targets/react-dom'

import * as State from './state'
import * as Styles from './styles'

type Animation = (
  message: AnimationMessage,
  anAnimatedValue: AnimatedValue
) => void

class SwitchLifecycle extends Switch {
  animation: Animation
  state: HasAnimationState = State.init()

  constructor(props: HasAnimation) {
    super(props)

    const { animation } = props

    this.animation = animation
      ? animation
      : State.spring(Animated)
  }

  componentWillAppear() {
    this.animation('AnimationEnd', this.state.animate)
  }

  componentWillEnter() {
    this.animation('AnimationEnd', this.state.animate)
  }

  componentWillLeave() {
    this.animation('AnimationStart', this.state.animate)
  }

  render() {
    return (
      <Animated.div style={ Styles.create(this.state.animate) }>
        { super.render() }
      </Animated.div>
    )
  }
}

export default SwitchLifecycle
