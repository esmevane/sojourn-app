// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

export const Container = styled.div`
  background-color: ${Theme.background};
  box-shadow: ${Theme.lightBoxShadow};
  color: ${Theme.foreground};

  min-height: ${Theme.largeContent}px;

  margin-top: 1em;
  padding: 1em;
`
