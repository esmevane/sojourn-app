// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

const fadeIn = ({ show }) =>
  show
    ? Theme.shadow
    : Theme.transparent

export const Backdrop = styled.div`
  background: ${fadeIn};

  display: flex;
  align-items: center;
  align-content: center;

  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 2;

  pointer-events: none;
  transition: ${Theme.transition};
  transition-delay: ${Theme.transition};
`

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 2fr 20fr 1fr;

  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
`

export const Headline = styled.h1`
  color: ${Theme.shadow};
  font-weight: lighter;
`

export const Tagline = Headline.extend`
  color: ${Theme.lightShadow};
  padding-left: 0.5em;
`
