// @flow

import React from 'react'

import Drawer from 'components/Drawer'
import Menu from 'components/Menu'
import Modal from 'components/Modal'

import { Layout } from 'themes/components'
import { Content, Headline, Glance, Letterhead, Tagline } from './styles'

import EditablePage from 'components/EditablePage'

const Sojourn = (props: any): React$Element<any> =>
  <Layout>
    <Letterhead>
      <Headline>sojourn</Headline>
      <Tagline>journal away</Tagline>
    </Letterhead>
    <Content>
      <EditablePage />
    </Content>
    <Glance>@ Something</Glance>
    <Drawer />
    <Menu />
    <Modal />
  </Layout>

export default Sojourn
