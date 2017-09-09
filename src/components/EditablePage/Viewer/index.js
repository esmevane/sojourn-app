// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { stateToHTML } from 'draft-js-export-html'
import { Container, Controls, EditButton } from './styles'

const Viewer = ({ page }: any): React$Element<any> => (
  <Container>
    <Controls>
      <Link to="/edit">
        <EditButton />
      </Link>
    </Controls>
    <div
      dangerouslySetInnerHTML={{
        __html: stateToHTML(page.content.getCurrentContent())
      }}
    />
  </Container>
)

export default Viewer
