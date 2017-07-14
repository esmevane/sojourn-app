// @flow

import { expect } from 'chai'
import drawer from './drawer'
import * as Actions from 'actions'

describe("drawer", () => {
  it("doesn't show by default", () => {
    const state = drawer(undefined, Actions.emptyAction())

    expect(state.show).to.be.false
  })

  it("can be told to show", () => {
    const state = drawer(undefined, Actions.showDrawer())

    expect(state.show).to.be.true
  })

  it("can be told to hide", () => {
    const init = drawer(undefined, Actions.showDrawer())
    const state = drawer(init, Actions.hideDrawer())

    expect(state.show).to.be.false
  })
})
