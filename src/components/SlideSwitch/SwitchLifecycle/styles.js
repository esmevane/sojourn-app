// @flow

import * as Animated from 'animated/lib/targets/react-dom'
import * as State from './state'

export const StartOffset = "12px"
export const EndOffset = "0px"

export const range = (anAnimatedValue: AnimatedValue): string =>
  anAnimatedValue.interpolate(
    {
      inputRange: [ State.StartValue, State.EndValue ],
      outputRange: [ StartOffset, EndOffset ]
    }
  )

export const opacity = (anAnimatedValue: AnimatedValue): string =>
  Animated.template`${anAnimatedValue}`

export const transform = (anAnimatedValue: AnimatedValue): string =>
  Animated.template`translate3d(0,${range(anAnimatedValue)},0)`

export const create = (anAnimatedValue: AnimatedValue): Stylesheet => (
  {
    opacity: opacity(anAnimatedValue),
    transform: transform(anAnimatedValue)
  }
)
