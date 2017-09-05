// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content, Controls } from './styles'
import DraftingArea from './DraftingArea'

const Editor = (props: any): React$Element<any> =>
  <Container>
    <Controls>
      <Link to="/">Back</Link>
    </Controls>
    <Content>
      <DraftingArea {...props} />
    </Content>
  </Container>

export default Editor
