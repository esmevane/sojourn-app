// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 1em;
`

export const Content = styled.h1`
  font-weight: lighter;
  text-align: center;
  color: ${Theme.foreground};
`
