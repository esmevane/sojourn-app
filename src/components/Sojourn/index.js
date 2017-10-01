// @flow

import React from 'react'
import * as Icons from 'react-feather'

import { connectOverlay, controlsOverlay } from 'state/connectors'

import {
  Footer,
  Header,
  HeaderCenter,
  HeaderSettings,
  Layout,
  Overlay,
  Note,
  NoteControls,
  NoteContent
} from './styles'

const ConnectedOverlay = connectOverlay(Overlay)
const Sojourn = ({ hideOverlay, showOverlay }: any) => (
  <div>
    <Layout>
      <Note>
        <NoteControls>
          <Icons.Edit className="button" />
          <Icons.Star className="button" />
          <Icons.Bookmark className="button" />
          <Icons.Trash2 className="button" />
          <Icons.X className="button" />
        </NoteControls>
        <NoteContent>
          <Icons.Circle className="filler" />
        </NoteContent>
      </Note>
    </Layout>
    <Layout>
      <Header>
        <HeaderCenter>sojourn</HeaderCenter>
        <HeaderSettings>
          <Icons.Menu className="button" onClick={showOverlay} />
        </HeaderSettings>
      </Header>
      <Footer>@ something</Footer>
    </Layout>
    <Layout>
      <ConnectedOverlay onClick={hideOverlay} />
    </Layout>
  </div>
)

export default controlsOverlay(Sojourn)
