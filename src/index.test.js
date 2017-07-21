// @flow

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'

import App from 'components/App'

describe('Integrations', () => {
  const app = mount(<App />)

  it('mounts Redux with a valid store', () => {
    expect(app.find('Provider').prop('store')).to.be.ok
  })

  it('mounts React Router with a valid history', () => {
    expect(app.find('Router').prop('history')).to.be.ok
  })
})

describe('First run experience', () => {
  it('shows the user a greeting on their first open', () => {
    const app = mount(<App />)
    const messages = [
      "Hello!",
      "Looks like this page is empty.",
      "Do you want to write something here?"
    ]

    messages.forEach(message => {
      expect(app.find('Content').text()).to.contain(message)
    })
  })
})
