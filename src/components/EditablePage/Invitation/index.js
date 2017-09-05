// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content } from './styles'

const Invitation = (props: any): React$Element<any> =>
  <Container>
    <Content>
      Hello!{' '}
      <span role="img" aria-label="A waving hand">
        👋
      </span>
      <br />
      <br />
      Looks like this page is empty.
      <br />
      <Link to="/edit">Do you want to write something here?</Link>
    </Content>
  </Container>
export default Invitation
