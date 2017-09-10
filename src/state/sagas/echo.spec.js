// @flow

import { expect } from 'chai'
import { delay } from 'redux-saga'
import { call, takeEvery } from 'redux-saga/effects'
import * as Echo from './echo'
import * as Actions from 'state/actions'

describe('echo', () => {
  const generator = Echo.echo()

  it('takes every { type: "echo" } action', () => {
    const subject = generator.next().value

    expect(subject).to.eql(takeEvery(Actions.Echo, Echo.log))
  })
})

describe('log', () => {
  const action = Actions.echo()
  const generator = Echo.log(action)

  it('delays', () => {
    const subject = generator.next().value

    expect(subject).to.eql(call(delay, 300))
  })

  it('sends log output', () => {
    const subject = generator.next().value

    expect(subject).to.eql(
      call([console, console.log], 'Echoing', action)
    )
  })
})
