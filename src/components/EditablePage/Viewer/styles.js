// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  padding-top: 1em;
`

export const Controls = styled.div`
  color: ${Theme.foreground};

  font-weight: lighter;
  text-align: right;
`
