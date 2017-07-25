// @flow

import * as Animated from 'animated/lib/targets/react-dom'

export const StartValue = 0
export const EndValue = 1

export const animationValueOf = ({ animate }: HasAnimationState) =>
  animate._value

export const init = (): HasAnimationState => (
  { animate: new Animated.Value(StartValue) }
)

export const spring = (animator: Animator) =>
  (
    message: AnimationMessage,
    anAnimatedValue: AnimatedValue
  ): void => {
    switch (message) {
      case 'AnimationEnd':
        return animator
          .spring(anAnimatedValue, { toValue: EndValue })
          .start()

      case 'AnimationStart':
        return animator
          .spring(anAnimatedValue, { toValue: StartValue })
          .start()

      default:
        return
    }
  }
