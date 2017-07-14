// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 2fr 20fr 1fr;

  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
`
