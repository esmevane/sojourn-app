// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

export const HeaderSettings = styled.div`
  pointer-events: auto;

  grid-area: head-settings;

  .button {
    cursor: pointer;

    color: ${Theme.colors.accent.alpha(0.5).css()};
    stroke-width: ${Theme.sizes.lines.thin}px;
  }
`
