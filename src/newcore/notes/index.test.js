// @flow

import { expect } from 'chai'
import Notes from './index'

class SpyClient {
  fetchReturns: any
  fetchWasCalled: boolean

  constructor({ fetch }) {
    this.fetchReturns = fetch
  }

  fetch(): any {
    this.fetchWasCalled = true
    return this.fetchReturns
  }
}

describe('Notes', () => {
  it('allows a user to fetch Notes', () => {
    const contents = []
    const client = new SpyClient({ fetch: [contents] })
    const notes = new Notes(client)

    return notes.fetch().then(notes => expect(notes).to.be.ok)
  })
})
