// @flow

import React from 'react'

import Content from './Content'
import Drawer from './Drawer'
import Glance from './Glance'
import Letterhead from './Letterhead'
import Menu from './Menu'
import Modal from './Modal'
import Shell from './Shell'

import { Headline, Layout, Tagline } from './styles'

import EditablePage from 'components/EditablePage'

const App = (props: any): React$Element<any> =>
  <Shell>
    <Layout>
      <Letterhead>
        <Headline>sojourn</Headline>
        <Tagline>journal away</Tagline>
      </Letterhead>
      <Content>
        <EditablePage />
      </Content>
      <Glance />
      <Menu />
      <Drawer />
      <Modal />
    </Layout>
  </Shell>

export default App
