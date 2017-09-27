// @flow

import React from 'react'
import { Container } from './styles'

const Viewer = ({ page }: any): React$Element<any> => (
  <Container>
    <div
      dangerouslySetInnerHTML={{
        __html: page.content.getCurrentContent()
      }}
    />
  </Container>
)

export default Viewer
