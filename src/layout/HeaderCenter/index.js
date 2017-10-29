// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

export const HeaderCenter = styled.div`
  pointer-events: none;

  grid-area: head-center;

  color: ${Theme.colors.black.alpha(0.5).css()};
  font-size: ${Theme.sizes.large}px;
`
