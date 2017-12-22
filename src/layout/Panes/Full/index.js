// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

export const Full = styled.div`
  background: white;
  border-radius: ${Theme.sizes.tiny}px;
  grid-area: controls / controls / actions / actions;
`
