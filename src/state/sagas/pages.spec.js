// @flow

import { expect } from 'chai'
import { eventChannel } from 'redux-saga'
import { take, put } from 'redux-saga/effects'

import * as Actions from 'state/actions'
import * as Pages from './pages'

describe('pages', () => {
  const generator = Pages.pages(Pages.channel)
  const content = ['a list']

  it('listens to the repo observation channel', () => {
    const subject = generator.next().value
    const expectation = take(Pages.channel)

    expect(subject).to.eql(expectation)
  })

  it('echoes the channel supplied action', () => {
    const subject = generator.next(content).value
    const expectation = put(Actions.echo(content))

    expect(subject).to.eql(expectation)
  })

  it('submits the given action', () => {
    const subject = generator.next(content).value
    const expectation = put(content)

    expect(subject).to.eql(expectation)
  })
})
