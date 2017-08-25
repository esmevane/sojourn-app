// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

const fadeIn = ({ show }) => (show ? Theme.shadow : Theme.transparent)

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
  grid-template-rows: 80px minmax(auto, 0.95fr) 20px;

  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
`
