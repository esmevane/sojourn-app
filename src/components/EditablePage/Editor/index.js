// @flow

import React from 'react'

import { Container } from './styles'
import DraftingArea from './DraftingArea'

const Editor = (props: any): React$Element<any> => (
  <Container>
    <DraftingArea {...props} />
  </Container>
)

export default Editor
