// @flow

import React from 'react'
import { stateToHTML } from 'draft-js-export-html'
import { Container } from './styles'

const Viewer = ({ page }: any): React$Element<any> => (
  <Container>
    <div
      dangerouslySetInnerHTML={{
        __html: stateToHTML(page.content.getCurrentContent())
      }}
    />
  </Container>
)

export default Viewer
