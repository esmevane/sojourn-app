// @flow

import chroma from 'chroma-js'

export const extent = 32
export const borderRadius = '3px'
export const transition = '0.3s'
export const foreground = 'midnightblue'
export const primary = 'palevioletred'
export const page = 'cornsilk'
export const white = 'white'

export const colors = {
  primary: chroma(primary),
  foreground: chroma(foreground),
  page: chroma(page),
  white: chroma(white)
}

export const action = colors.primary.css()
export const highlight = colors.primary.alpha(0.05).css()
export const transparent = colors.foreground.alpha(0).css()
export const shadow = colors.foreground.alpha(0.4).css()
export const lightShadow = colors.foreground.alpha(0.2).css()
export const background = colors.page
  .desaturate(0.3)
  .brighten(0.4)
  .css()

export const recessed = colors.page
  .desaturate(0.3)
  .brighten(0.4)
  .darken(0.1)
  .css()

export const paper = colors.white.alpha(0.8)
export const shade = colors.foreground.alpha(0.8).css()

export const largest = extent
export const medium = extent * 0.75
export const small = extent * 0.5
export const largeContent = extent * 10

export const sixth = (size: number): number => size * 0.1875

export const shadowFor = (
  size: number,
  tone: string = shade
): string => `0 0 ${size}px -${sixth(size)}px ${tone}`

export const boxShadow = shadowFor(medium)
export const hoverBoxShadow = shadowFor(largest)
export const lightBoxShadow = shadowFor(
  small,
  colors.foreground.alpha(0.4).css()
)

export const hoverShadow = `
  :hover {
    box-shadow: ${hoverBoxShadow};
  }
`
