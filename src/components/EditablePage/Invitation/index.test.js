// @flow

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Invitation from './index'

describe('Invitation', () => {
  const invitation = shallow(<Invitation />)

  it('renders an edit Link', () => {
    expect(invitation.find('Link')).to.have.length(1)
  })

})
