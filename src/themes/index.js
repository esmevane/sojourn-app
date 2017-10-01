// @flow

import chroma from 'chroma-js'

export default () => {
  const baseSize = 16

  const colors = {
    accent: chroma('rgb(102, 77, 182)'),
    highlight: chroma('rgb(169, 56, 182)'),
    black: chroma('black'),
    white: chroma('white')
  }

  const sizes = {
    lines: {
      thin: 1,
      fat: 6,
      large: 4
    },
    tiny: baseSize * 0.25,
    small: baseSize * 0.5,
    base: baseSize,
    large: baseSize * 1.5,
    giant: baseSize * 2
  }

  const transitionTime = '0.3s'
  const borderRadius = `${sizes.tiny}px`

  return {
    colors,
    sizes,
    transition: {
      duration: transitionTime
    },
    borderRadius
  }
}
