// @flow

import React from 'react'
import styled from 'styled-components'
import { Edit } from 'react-feather'
import * as Theme from 'themes'

export const EditButton = () => (
  <Edit color={Theme.colors.primary.css()} />
)

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  padding-top: 1em;
`

export const Controls = styled.div`
  color: ${Theme.foreground};

  font-weight: lighter;
  text-align: right;
`
