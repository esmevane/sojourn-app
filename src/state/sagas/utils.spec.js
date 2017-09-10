// @flow

import { expect } from 'chai'
import { eventChannel } from 'redux-saga'
import { take, put } from 'redux-saga/effects'

import * as Utils from './Utils'
import { Notes, Store } from 'core'

class SpyRepo extends Notes {
  listeners: Array<string> = []

  on(listener: string, ...rest) {
    this.listeners.push(listener)
  }

  off(listener: string, ...rest) {
    this.listeners = this.listeners.filter(
      candidate => candidate !== listener
    )
  }
}

describe('observeRepo', () => {
  const spyRepo = new SpyRepo(new Store.Memory())
  const channel = Utils.observeRepo(spyRepo)
  const unsubscribe = channel(() => {})

  it('registers all listeners', () => {
    expect(spyRepo.listeners).to.eql(spyRepo.actions())
  })

  it('provides an unsubscribe listeners function', () => {
    unsubscribe()
    expect(spyRepo.listeners).to.eql([])
  })
})
