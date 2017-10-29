// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

export const Header = styled.header`
  grid-row: head-anchor;
  grid-column: head-anchor / head-settings;

  background-color: ${Theme.colors.white.css()};
`
