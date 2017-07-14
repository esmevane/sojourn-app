// @flow

import { expect } from 'chai'
import modal from './modal'
import * as Actions from 'actions'

describe("modal", () => {
  it("doesn't show by default", () => {
    const state = modal(undefined, Actions.emptyAction())

    expect(state.show).to.be.false
  })

  it("can be told to show", () => {
    const state = modal(undefined, Actions.showModal())

    expect(state.show).to.be.true
  })

  it("can be told to hide", () => {
    const init = modal(undefined, Actions.showModal())
    const state = modal(init, Actions.hideModal())

    expect(state.show).to.be.false
  })
})
