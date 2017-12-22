// @flow

import React from 'react'
import styled from 'styled-components'
import Spinkit from 'react-spinkit'
import * as Icons from 'react-feather'

import createLayout from 'layout'
import createTheme from 'themes'

const Layout = createLayout()
const Theme = createTheme()
const accent = Theme.colors.accent.css()

const Input = styled.input`
  background: ${Theme.colors.accent
    .darken(1)
    .alpha(0.03)
    .css()};
  border: 1px solid ${Theme.colors.accent.alpha(0.3).css()};
  color: ${Theme.colors.accent.alpha(0.8).css()};
  pointer-events: auto;
  font-size: ${Theme.sizes.base}px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  line-height: 1.5;
  padding: ${Theme.sizes.small}px ${Theme.sizes.base}px;
  flex: 1;

  ::placeholder {
    color: ${Theme.colors.accent.alpha(0.6).css()};
  }

  :focus {
    outline: none;
  }
`

const Search = Input.extend``
const QuickNote = Input.extend``

const Note = styled.div`
  display: grid;
  grid-template: 'details details' ${Theme.sizes.giant * 1.25}px
    'imagery content' 1fr / ${Theme.sizes.giant * 2}px 1fr;
`

const EntireNote = styled.div`
  grid-area: details / details / content / content;
`

const Content = styled.div`
  pointer-events: auto;
  grid-area: content;

  display: grid;
  grid-template: 'summary' 3fr 'controls' 1fr;
`

const Summary = styled.div`
  grid-area: summary;
`

const Controls = styled.div`
  grid-area: controls;
`

const Details = styled.div`
  grid-area: details;
`

const Imagery = styled.div`
  grid-area: imagery;
`

const Title = styled.div`
  background: ${Theme.colors.white};
  font-size: ${Theme.sizes.large * 0.9}px;
  line-height: 1.5;
  padding: 0 ${Theme.sizes.base * 1.5}px;
`

const Control = styled.div`
  background: ${Theme.colors.white};
  padding: ${Theme.sizes.base * 0.75}px ${Theme.sizes.base * 1.5}px;
  display: flex;
`

const NoteList = styled.div`
  background: ${Theme.colors.white};
  background-color: ${Theme.colors.white
    .darken(0.2)
    .alpha(0.85)
    .css()};
`

const Scrollable = styled.div`
  pointer-events: auto;
  overflow-y: scroll;

  padding: 0 ${Theme.sizes.large}px;

  width: 100%;
  height: 100%;
`

const Placeholder = ({ width, height }) => (
  <img
    alt="icon placeholder"
    src={`https://placehold.it/${height}x${width}`}
  />
)

const NoteItem = id => (
  <Note key={id}>
    <Details>Stuff</Details>
    <Imagery>
      <Placeholder width={50} height={50} />
    </Imagery>
    <Content>
      <Summary>A note</Summary>
      <Controls>
        <Icons.Edit />
        <Icons.Star />
        <Icons.Bookmark />
        <Icons.Trash2 />
        <Icons.X />
      </Controls>
    </Content>
  </Note>
)

export default () => (
  <Layout.Content>
    <Layout.Flex column>
      <Title>Your notes</Title>
      <Control>
        <Search placeholder="search notes" />
      </Control>
      <Control>
        <QuickNote placeholder="make a quick note" />
      </Control>
      <Scrollable>
        <NoteList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(NoteItem)}
          <Note>
            <EntireNote>
              <Spinkit name="ball-scale-multiple" color={accent} />
            </EntireNote>
          </Note>
        </NoteList>
      </Scrollable>
    </Layout.Flex>
  </Layout.Content>
)
