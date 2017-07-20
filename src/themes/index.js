// @flow

import chroma from 'chroma-js'

export const borderRadius = '3px'
export const transition = "0.3s"
export const foreground = 'midnightblue'
export const transparent = chroma(foreground).alpha(0).css()
export const shadow = chroma(foreground).alpha(0.4).css()
export const lightShadow = chroma(foreground).alpha(0.2).css()
export const background = chroma('cornsilk')
  .desaturate(0.3)
  .brighten(0.3)
  .css()

export const paper = chroma('white').alpha(0.8)
export const shade = chroma(foreground).alpha(0.8).css()
export const boxShadow = `0 0 24px -4px ${shade}`
export const hoverBoxShadow = `0 0 32px -6px ${shade}`

export const hoverShadow = `
  :hover {
    box-shadow: ${hoverBoxShadow};
  }
`
