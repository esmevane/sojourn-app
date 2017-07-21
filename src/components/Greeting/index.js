// @flow

import React from 'react'

import { Container, Content } from './styles'

const Greeting = (props: any): React$Element<any> =>
  <Container>
    <Content>
      Hello!
      <br />
      Looks like this page is empty.
      <br />
      Do you want to write something here?
    </Content>
  </Container>

export default Greeting
