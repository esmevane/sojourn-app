// @flow

import chroma from 'chroma-js'

export const borderRadius = '3px'
export const transition = "0.3s"
export const transparent = 'rgba(0, 0, 0, 0)'
export const shadow = 'rgba(0, 0, 0, 0.4)'
export const foreground = 'midnightblue'
export const background = chroma('cornsilk')
  .desaturate(0.3)
  .brighten(0.3)
  .css()

export const shade = chroma(foreground).alpha(0.8).css()
export const boxShadow = `0 0 24px -4px ${shade}`
