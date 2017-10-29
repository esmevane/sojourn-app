// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

export const Footer = styled.footer`
  pointer-events: auto;

  grid-area: footer;

  background-color: ${Theme.colors.black.alpha(0.25).css()};
  border-top: ${Theme.sizes.lines.thin}px solid
    ${Theme.colors.black.alpha(0.15).css()};
  color: ${Theme.colors.accent
    .brighten(3.25)
    .alpha(0.75)
    .css()};
  font-size: ${Theme.sizes.base * 0.8}px;

  display: flex;
  justify-content: center;
  align-items: center;
`
