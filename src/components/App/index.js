// @flow

import React from 'react'
import Shell from './Shell'
import Content from './Content'
import Letterhead from './Letterhead'
import Glance from './Glance'
import Menu from 'components/Menu'
import Drawer from 'components/Drawer'
import Modal from 'components/Modal'

import { Layout } from './styles'

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
