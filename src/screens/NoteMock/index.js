// @flow

import React from 'react'
import Spinkit from 'react-spinkit'
import * as Icons from 'react-feather'

import createTheme from 'themes'
import createLayout from 'layout'

const Theme = createTheme()
const Layout = createLayout()
const accent = Theme.colors.accent.css()

export default () => (
  <Layout.Main>
    <Layout.Flex>
      <Layout.Panes.Large>
        <Layout.Panes.Controls>
          <Layout.Flex right>
            <Icons.Edit className="button" />
            <Icons.Star className="button" />
            <Icons.Bookmark className="button" />
            <Icons.Trash2 className="button" />
            <Icons.X className="button" />
          </Layout.Flex>
        </Layout.Panes.Controls>
        <Layout.Panes.Content>
          <Layout.Flex center>
            <Spinkit name="ball-scale-multiple" color={accent} />
          </Layout.Flex>
        </Layout.Panes.Content>
      </Layout.Panes.Large>
    </Layout.Flex>
  </Layout.Main>
)
