// @flow

import React from 'react'
import chroma from 'chroma-js'
import styled from 'styled-components'
import Shell from './Shell'
import Menu from 'components/Menu'
import Drawer from 'components/Drawer'
import Modal from 'components/Modal'

const paper = chroma('cornsilk').desaturate(0.3).brighten(0.3).css()

const Layout = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 2fr 20fr 1fr;

  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`

const Content = styled.main`
  background: ${paper};
  color: midnightblue;
`

const Letterhead = styled.header`
  background: ${paper};
`

const Glance = styled.footer`
  background: ${paper};
`

const App = (props: any): React$Element<any> =>
  <Shell>
    <Layout>
      <Letterhead />
      <Content />
      <Glance />
      <Menu />
      <Drawer />
      <Modal />
    </Layout>
  </Shell>

export default App
