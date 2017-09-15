// @flow

import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BackButton, Button, Container, EditButton } from './styles'

const Back = (props: any): React$Element<any> => (
  <Button>
    <Link to="/">
      <BackButton />
    </Link>
  </Button>
)

const EditPage = ({ page }: any): React$Element<any> => (
  <Button>
    <Link to="/edit">
      <EditButton />
    </Link>
  </Button>
)

const editableRegion = ({
  location
}: HasLocation): React$Element<any> => (
  <Switch key={location.key} location={location}>
    <Route exact path="/edit/:path*" component={Back} />
    <Route exact path="/:path*" component={EditPage} />
  </Switch>
)

const EditablePageControls = (): React$Element<any> => (
  <Container>
    <Route render={editableRegion} />
  </Container>
)

export default EditablePageControls
