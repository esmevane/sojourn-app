// @flow

import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import * as Icons from 'react-feather'

import AccentLine from 'elements/AccentLine'
import PageLink from 'elements/PageLink'

import ListsMock from 'screens/ListsMock'
import LoginMock from 'screens/LoginMock'
import NoteMock from 'screens/NoteMock'
import NotificationsMock from 'screens/NotificationsMock'

import createLayout from 'layout'
import { connectOverlay, controlsOverlay } from 'state/connectors'

const Layout = createLayout()
const ConnectedOverlay = connectOverlay(Layout.Overlay)

const Sojourn = ({ location, hideOverlay, showOverlay }: any) => (
  <div>
    <Layout.Base>
      <Route exact path="/note" component={NoteMock} />
      <Route exact path="/login" component={LoginMock} />
      <Route exact path="/lists" component={ListsMock} />
    </Layout.Base>
    <Layout.Base>
      <Layout.Accent>
        <AccentLine />
      </Layout.Accent>
      <Layout.Header />
      <Layout.HeaderCenter>
        <Layout.Flex center>sojourn</Layout.Flex>
      </Layout.HeaderCenter>
      <Layout.HeaderSettings>
        <Layout.Flex center>
          <Icons.Menu className="button" onClick={showOverlay} />
        </Layout.Flex>
      </Layout.HeaderSettings>
      <Layout.Footer>
        <Layout.Flex center>@ something</Layout.Flex>
      </Layout.Footer>
    </Layout.Base>
    <Layout.Base>
      <Layout.Content>
        <Layout.Flex endUp>
          <Route
            exact
            path="/notifications"
            component={NotificationsMock}
          />
        </Layout.Flex>
      </Layout.Content>
    </Layout.Base>
    <Layout.Base>
      <ConnectedOverlay onClick={hideOverlay}>
        <Layout.Flex center>
          <PageLink to="/">Home</PageLink>
          <PageLink to="/note">Note</PageLink>
          <PageLink to="/lists">Lists</PageLink>
          <PageLink to="/notifications">Notifications</PageLink>
          <PageLink to="/login">Login</PageLink>
        </Layout.Flex>
      </ConnectedOverlay>
    </Layout.Base>
  </div>
)

export default withRouter(controlsOverlay(Sojourn))
