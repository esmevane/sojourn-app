// @flow

import chroma from 'chroma-js'

export default () => {
  const baseSize = 16
  const accent = chroma('rgb(102, 77, 182)')
  const highlight = accent
    .saturate(1.5)
    .brighten(0.95)
    .set('hcl.h', '*1.05')

  const colors = {
    accent,
    highlight,
    black: chroma('black'),
    white: chroma('white'),
    scale: (start: string, end: string) =>
      chroma.scale([start, end]).mode('hcl')
  }

  const sizes = {
    lines: {
      thin: 1,
      bold: 2,
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
      duration: transitionTime,
      slow: '0.6s',
      delay: '0.2s'
    },
    borderRadius
  }
}
