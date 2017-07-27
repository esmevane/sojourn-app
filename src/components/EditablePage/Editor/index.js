// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content, Controls } from './styles'
import DraftingArea from './DraftingArea'

const Editor = (props: any): React$Element<any> =>
  <Container>
    <Content>
      <DraftingArea />
    </Content>
    <Controls>
      <Link to="/">Back</Link>
    </Controls>
  </Container>

export default Editor
