// @flow

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { isIntegrationTest } from 'test/helpers'
import EditablePage from './index'

isIntegrationTest()

describe('EditablePage', () => {
  const page = mount(
    <MemoryRouter>
      <EditablePage />
    </MemoryRouter>
  )

  it('renders a SlideSwitch', () => {
    expect(page.find('SlideSwitch')).to.have.length(1)
  })

})
