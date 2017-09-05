// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

export const Content = styled.main`
  color: ${Theme.foreground};

  display: grid;
  grid-template-areas: "left-content interior right-content";
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

  padding: 0.5em;
`

export const Headline = styled.h1`
  color: ${Theme.shadow};
  font-family: 'Overpass Mono';
  font-size: 1.5em;
`
