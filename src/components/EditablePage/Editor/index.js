// @flow

import React from 'react'
import { ArrowLeft } from 'react-feather'
import { Link } from 'react-router-dom'

import { Container, Content, Controls } from './styles'
import DraftingArea from './DraftingArea'

const Editor = (props: any): React$Element<any> => (
  <Container>
    <Controls>
      <Link to="/">
        <ArrowLeft />
      </Link>
    </Controls>
    <DraftingArea {...props} />
  </Container>
)

export default Editor
