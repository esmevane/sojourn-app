// @flow

import React from 'react'
import chroma from 'chroma-js'
import styled from 'styled-components'
import Shell from './Shell'

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 2fr 20fr 1fr;
`

const paper = chroma('cornsilk')
  .desaturate(0.3)
  .brighten(0.3)
  .css()

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
    </Layout>
  </Shell>

export default App
