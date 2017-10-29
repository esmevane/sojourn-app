// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()
const gutter = `${Theme.sizes.giant}px`
const bar = `${Theme.sizes.giant * 1.25}px`

export const Base = styled.div`
  pointer-events: none;

  position: absolute;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template: 'accent accent accent accent accent'
    ${Theme.sizes.tiny}px
    'head-anchor head-center head-center head-center head-settings'
    ${bar} 'aside aside main sidebar sidebar' auto
    'footer footer footer footer footer' ${bar} / ${gutter} 1fr 5fr
    1fr ${gutter};

  transition: ${Theme.transition.duration};

  * {
    stroke-width: 1px;
  }
`
