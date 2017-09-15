// @flow

import React from 'react'

import Drawer from 'components/Drawer'
import Menu from 'components/Menu'
import Modal from 'components/Modal'

import { Layout } from 'themes/components'
import {
  Glance,
  Letterhead,
  PageContent,
  PageControls,
  PageInterior
} from './styles'

import EditablePage from 'components/EditablePage'
import EditablePageControls from 'components/EditablePageControls'

const Sojourn = (props: any): React$Element<any> => (
  <Layout>
    <Letterhead />
    <PageContent>
      <PageControls>
        <EditablePageControls />
      </PageControls>
      <PageInterior>
        <EditablePage />
      </PageInterior>
    </PageContent>
    <Glance>@ Something</Glance>
    <Drawer />
    <Menu />
    <Modal />
  </Layout>
)

export default Sojourn
