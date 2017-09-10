// @flow

import { eventChannel } from 'redux-saga'
import { take, put } from 'redux-saga/effects'

import { Notes, Store } from 'core'
import * as Actions from 'state/actions'
import * as Utils from 'state/sagas/utils'

export const repo = new Notes(new Store.Memory())

export const channel: EventChannel = eventChannel(
  Utils.observeRepo(repo)
)

export const pages = function*(
  events: EventChannel = channel
): Generator<*, *, *> {
  while (true) {
    let action = yield take(events)

    yield put(Actions.echo(action))
    yield put(action)
  }
}
