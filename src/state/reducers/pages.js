// @flow

import * as Actions from 'state/actions'

const defaults: RecordState<Note> = { records: {} }

const remove = (
  state: RecordState<Note> = defaults,
  slug: Slug
): RecordState<Note> => {
  const records = { ...state.records }

  delete records[slug]

  return { ...state, records }
}

const insert = (
  state: RecordState<Note> = defaults,
  page: Note
): RecordState<Note> => {
  const records = { ...state.records }
  records[page.slug] = page

  return { ...state, records }
}

const pages = (
  state: RecordState<Note> = defaults,
  action: Action
): RecordState<Note> => {
  switch (action.type) {
    case Actions.InsertPage:
      // $FlowDisjointActionIssue
      return insert(state, action.payload)
    case Actions.RemovePage:
      // $FlowDisjointActionIssue
      return remove(state, action.payload)
    default:
      return state
  }
}

export default pages
