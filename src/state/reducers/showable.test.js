// @flow

import { expect } from 'chai'
import showable from './showable'
import * as Actions from 'state/actions'

describe('showable', () => {
  const Hide = 'Hide'
  const Show = 'Show'
  const hide = { type: Hide }
  const show = { type: Show }
  const subject = showable(Hide, Show)

  it("doesn't show by default", () => {
    const state = subject(undefined, Actions.emptyAction())

    expect(state.show).to.be.false
  })

  it('can be told to show', () => {
    const state = subject(undefined, show)

    expect(state.show).to.be.true
  })

  it('can be told to hide', () => {
    const init = subject(undefined, show)
    const state = subject(init, hide)

    expect(state.show).to.be.false
  })
})
