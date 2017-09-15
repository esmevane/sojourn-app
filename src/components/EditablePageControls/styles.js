// @flow

import React from 'react'
import styled from 'styled-components'
import { ArrowLeft, Edit } from 'react-feather'
import * as Theme from 'themes'

export const BackButton = () => <ArrowLeft color={Theme.shadow} />
export const EditButton = () => <Edit color={Theme.shadow} />

export const Container = styled.div`
  color: ${Theme.subtle};

  font-weight: lighter;
  text-align: right;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  padding-top: ${Theme.small * 0.5}px;
`

export const Button = styled.span``
