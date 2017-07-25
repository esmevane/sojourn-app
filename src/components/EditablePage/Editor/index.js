// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content } from './styles'

const Greeting = (props: any): React$Element<any> =>
  <Container>
    <Content>
      I'm an editor!
      <Link to="/">Back</Link>
    </Content>
  </Container>

export default Greeting
