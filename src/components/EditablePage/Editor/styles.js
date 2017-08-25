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

export const Content = styled.div`
  font-family: 'Overpass Mono';
  font-weight: lighter;
  width: 50%;
  padding-top: 1em;
  color: ${Theme.foreground};
`

export const Controls = styled.div`
  font-weight: lighter;
  text-align: right;
  color: ${Theme.foreground};
`
