// @flow

import { expect } from 'chai'
import menu from './menu'
import * as Actions from 'actions'

describe("menu", () => {
  it("doesn't show by default", () => {
    const state = menu(undefined, Actions.emptyAction())

    expect(state.show).to.be.false
  })

  it("can be told to show", () => {
    const state = menu(undefined, Actions.showMenu())

    expect(state.show).to.be.true
  })

  it("can be told to hide", () => {
    const init = menu(undefined, Actions.showMenu())
    const state = menu(init, Actions.hideMenu())

    expect(state.show).to.be.false
  })
})
