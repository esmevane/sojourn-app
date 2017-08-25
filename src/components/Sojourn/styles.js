// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

export const Content = styled.main`
  color: ${Theme.foreground};
  padding: 1em 10em;
`

export const Glance = styled.footer`
  border-top: 1px solid ${Theme.lightShadow};
  color: ${Theme.lightShadow};

  display: flex;
  justify-content: center;

  padding: 1em 0;
`

export const Letterhead = styled.header`
  box-shadow: ${Theme.boxShadow};

  display: flex;
  justify-content: center;

  padding: 0 1em;
`

export const Headline = styled.h1`
  color: ${Theme.shadow};
  font-weight: lighter;
`

export const Tagline = Headline.extend`
  color: ${Theme.lightShadow};
  padding-left: 0.5em;
`
