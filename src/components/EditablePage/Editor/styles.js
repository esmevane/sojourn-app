// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

export const Container = styled.section`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1em;
`

export const Content = styled.div`
  font-family: 'Overpass Mono';
  font-weight: lighter;
  width: 50%;
  color: ${Theme.foreground};
`

export const Controls = styled.div`
  font-family: 'Overpass Mono';
  font-weight: lighter;
  text-align: center;
  font-size: 1.25em;
  color: ${Theme.foreground};
`
