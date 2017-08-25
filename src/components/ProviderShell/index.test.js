// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ProviderShell from './index'

describe('ProviderShell', () => {
  const shell = shallow(<ProviderShell />)

  it('renders a ReduxProvider', () => {
    expect(shell.find('ReduxProvider')).to.have.length(1)
  })

  it('renders a RouterProvider', () => {
    expect(shell.find('RouterProvider')).to.have.length(1)
  })
})
