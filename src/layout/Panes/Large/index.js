// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

export const Large = styled.div`
  pointer-events: auto;

  background-color: ${Theme.colors.white
    .darken(0.2)
    .alpha(0.85)
    .css()};

  border-radius: ${Theme.sizes.tiny}px;
  box-shadow: 0 ${Theme.sizes.tiny}px ${Theme.sizes.base}px -${Theme
      .sizes.base * 0.4}px ${Theme.colors.black.alpha(0.5).css()};

  display: grid;
  grid-template-areas: 'controls' 'content' 'actions';
  grid-template-rows: ${Theme.sizes.large}px auto
    ${Theme.sizes.large}px;

  margin: ${Theme.sizes.base}px;

  width: 100%;
`
