// @flow

import React from 'react'
import styled from 'styled-components'
import * as Icons from 'react-feather'
import createLayout from 'layout'
import createTheme from 'themes'

const Theme = createTheme()
const Layout = createLayout()

const Check = styled(Icons.Check)``

const User = styled(Icons.AtSign)`
  pointer-events: none;

  grid-area: center;

  color: ${Theme.colors.accent.alpha(0.5).css()};
  margin: auto ${Theme.sizes.small * 1.5}px;

  order: 1;
`

const Lock = styled(Icons.Lock)`
  pointer-events: none;

  grid-area: center;

  color: ${Theme.colors.accent.alpha(0.5).css()};
  margin: auto ${Theme.sizes.small * 1.5}px;

  order: 1;
`

const Label = styled.label`
  display: grid;
  grid-template: 'left center right' 1fr / 1fr 8fr 1fr;

  margin-top: ${Theme.sizes.base}px;
`

const Input = styled.input`
  grid-area: center;

  background: ${Theme.colors.white.alpha(0.75).css()};
  border: 1px solid ${Theme.colors.accent.alpha(0.3).css()};
  box-shadow: 0 ${Theme.sizes.tiny}px ${Theme.sizes.small}px -${Theme
      .sizes.small * 0.8}px ${Theme.colors.black.alpha(0.3).css()};
  color: ${Theme.colors.accent.alpha(0.9).css()};

  font-size: ${Theme.sizes.base}px;
  line-height: 1.5;

  padding: ${Theme.sizes.small}px ${Theme.sizes.base}px;
  padding-left: ${Theme.sizes.giant * 1.35}px;

  transition: ${Theme.transition.duration};

  ::placeholder {
    color: ${Theme.colors.accent.alpha(0.5).css()};
  }

  :focus {
    outline: none;
    box-shadow: 0 ${Theme.sizes.tiny}px ${Theme.sizes.small}px -${Theme
        .sizes.small * 0.5}px ${Theme.colors.black.alpha(0.3).css()};
  }
`

const Title = styled.h3`
  color: ${Theme.colors.accent
    .darken(0.2)
    .alpha(0.7)
    .css()};
  font-weight: 100;

  margin: 0;
  padding-left: ${Theme.sizes.base}px;
`

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: ${Theme.sizes.tiny}px;
  background: transparent;
  color: ${Theme.colors.accent
    .darken(0.2)
    .alpha(0.7)
    .css()};
  font-size: ${Theme.sizes.base}px;
  font-weight: 100;

  display: flex;
  align-items: center;

  margin-right: ${Theme.sizes.small}px;
  padding: ${Theme.sizes.small}px ${Theme.sizes.base}px;

  transition: ${Theme.transition.duration};

  :active {
    transform: translate3d(0, 1px, 0);
  }

  :active,
  :focus {
    outline: none;
  }

  ${Check} {
    margin-left: ${Theme.sizes.small}px;
  }
`

export default () => (
  <Layout.Main>
    <Layout.Flex center>
      <Layout.Panes.Dialog>
        <Layout.Panes.Controls>
          <Layout.Flex middleLeft>
            <Title>Log in or sign up</Title>
          </Layout.Flex>
        </Layout.Panes.Controls>
        <Layout.Panes.Content>
          <Layout.Flex column>
            <Label>
              <User />
              <Input
                type="text"
                name="username"
                placeholder="username"
              />
            </Label>
            <Label>
              <Lock />
              <Input
                type="password"
                name="password"
                placeholder="password"
              />
            </Label>
          </Layout.Flex>
        </Layout.Panes.Content>
        <Layout.Panes.Actions>
          <Layout.Flex right>
            <Button type="submit">
              Sign in
              <Check />
            </Button>
          </Layout.Flex>
        </Layout.Panes.Actions>
      </Layout.Panes.Dialog>
    </Layout.Flex>
  </Layout.Main>
)
