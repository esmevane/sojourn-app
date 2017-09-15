// @flow

import { eventChannel } from 'redux-saga'
import { call, fork, put, take, takeEvery } from 'redux-saga/effects'

import { Notes, Store } from 'core'
import * as Actions from 'state/actions'
import * as Utils from 'state/sagas/utils'

export const repo = new Notes(new Store.Pouch())

if (typeof window !== 'undefined') window.repo = repo

export const channel: EventChannel = eventChannel(
  Utils.observeRepo(repo)
)

export const pages = function*(
  events: EventChannel = channel
): Generator<*, *, *> {
  yield fork(requests)
  while (true) {
    let action = yield take(events)

    yield put(Actions.echo(action))
    yield put(action)
  }
}

export const request = function*(action: Action): Generator<*, *, *> {
  const id: Id = action.payload || ''

  try {
    const page = yield call([repo, repo.get], id)

    if (!page) {
      throw new Error(`Unable to locate page with id ${id}`)
    }

    yield put(Actions.insertPage(page))
    yield put(Actions.requestPageSuccess(id))
  } catch (error) {
    yield put(Actions.requestPageFailure({ error, id }))
  }
}

export const everyRequest = takeEvery(Actions.RequestPage, request)

export const requests = function*(): Generator<*, *, *> {
  yield everyRequest
}
