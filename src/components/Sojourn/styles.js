// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

export const Content = styled.main`
  background-color: ${Theme.recessed};
  color: ${Theme.foreground};

  display: grid;
  grid-template-areas: 'left-content interior right-content';
  grid-template-columns: 1fr 3fr 1fr;
`

export const ContentInterior = styled.section`grid-column: interior;`

export const Glance = styled.footer`
  border-top: 1px solid ${Theme.lightShadow};
  color: ${Theme.lightShadow};

  display: flex;
  justify-content: center;

  padding: 1em 0;
`

export const Letterhead = styled.header`
  box-shadow: ${Theme.boxShadow};
  color: ${Theme.foreground};

  display: flex;
  justify-content: center;
  z-index: 1;

  padding: 0.5em;
`
