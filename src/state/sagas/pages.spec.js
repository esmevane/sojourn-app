// @flow

import { expect } from 'chai'
import { eventChannel } from 'redux-saga'
import { call, fork, put, take, takeEvery } from 'redux-saga/effects'

import * as Actions from 'state/actions'
import * as Pages from './pages'

describe('request', () => {
  const id: Id = 'a note id'

  it('starts a page request for the ID', () => {
    const generator = Pages.request(Actions.requestPage(id))
    const subject = generator.next().value
    const expectation = call([Pages.repo, Pages.repo.get], id)

    expect(subject).to.eql(expectation)
  })

  it('inserts the requested page', async () => {
    const page = await Pages.repo.init()
    const generator = Pages.request(Actions.requestPage(id))

    generator.next()

    const subject = generator.next(page).value
    const expectation = put(Actions.insertPage(page))

    expect(subject).to.eql(expectation)
  })

  it('sends out a request success notice', async () => {
    const page = await Pages.repo.init()
    const generator = Pages.request(Actions.requestPage(id))

    generator.next()
    generator.next(page)

    const subject = generator.next().value
    const expectation = put(Actions.requestPageSuccess(id))

    expect(subject).to.eql(expectation)
  })

  describe('if there are problems', () => {
    it('sends out a request failure notice', async () => {
      const page = await Pages.repo.init()
      const generator = Pages.request(Actions.requestPage(id))
      const error = new Error('Oh noooooo')

      generator.next()
      generator.next(page)

      const subject = generator.throw(error).value
      const expectation = put(
        Actions.requestPageFailure({ error, id })
      )

      expect(subject).to.eql(expectation)
    })
  })
})

describe('requests', () => {
  it('launches a request handler for every RequestPage action', () => {
    const generator = Pages.requests()
    const subject = generator.next().value

    expect(subject).to.equal(Pages.everyRequest)
  })
})

describe('pages', () => {
  it('listens to the repo observation channel', () => {
    const generator = Pages.pages(Pages.channel)
    const content = ['a list']

    generator.next()

    const subject = generator.next().value

    expect(subject).to.eql(take(Pages.channel))
  })

  it('echoes the channel supplied action', () => {
    const generator = Pages.pages(Pages.channel)
    const content = ['a list']

    generator.next()
    generator.next()

    const subject = generator.next(content).value

    expect(subject).to.eql(put(Actions.echo(content)))
  })

  it('submits the given action', () => {
    const generator = Pages.pages(Pages.channel)
    const content = ['a list']

    generator.next()
    generator.next()
    generator.next(content)

    const subject = generator.next(content).value

    expect(subject).to.eql(put(content))
  })
})
