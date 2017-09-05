// @flow

import { connect } from 'react-redux'
import * as Actions from 'state/actions'
import { Notes } from 'state'

const selectPages = (state: State): Pages => state.pages.records
const getPageWithSlug = (state: State, props: any): PageContent => {
  const { params } = props.match || {}
  const slug: Slug = params.path || ''
  const pages: Pages = selectPages(state)
  const page: Note = Reflect.get(pages, slug) || Notes.create(slug)
  console.log('GetPageWithSlug debug', `Slug: ${slug}`)

  return {
    page
  }
}

export const connectPageEditor = connect(getPageWithSlug, {
  insertPage: Actions.insertPage
})

export const connectPage = connect(getPageWithSlug)

export const connectMenu = connect((state: State): Showable => ({
  show: state.ui.menu.show
}))

export const connectDrawer = connect((state: State): Showable => ({
  show: state.ui.drawer.show
}))

export const connectModal = connect((state: State): Showable => ({
  show: state.ui.modal.show
}))
