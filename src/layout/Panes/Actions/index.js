// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

export const Actions = styled.div`
  grid-area: actions;

  background-color: ${Theme.colors.white.css()};
  border-radius: 0 0 ${Theme.sizes.tiny}px ${Theme.sizes.tiny}px;
  color: ${Theme.colors.black.alpha(0.5).css()};
`
