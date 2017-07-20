// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

export const Container = styled.section`
  border-radius: ${Theme.borderRadius};
  box-shadow: ${Theme.boxShadow};
  margin: 2em;
  min-height: 30vh;
  position: relative;
  display: flex;

  transition: ${Theme.transition};

  ${Theme.hoverShadow}
`
