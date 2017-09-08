// @flow

import * as uuid from 'uuid'
import * as Contents from 'core/content'
import * as NoteValidations from '../validations'

const defaults: NoteAttributes = {
  id: uuid.v4(),
  title: '',
  slug: '',
  content: Contents.init()
}

export default class NoteEntity implements Note {
  attributes: NoteAttributes

  constructor(attributes: NoteOptions = {}) {
    this.attributes = { ...defaults, ...attributes }
  }

  get content(): EditorContent {
    return this.attributes.content
  }

  get slug(): Slug {
    return this.attributes.slug
  }

  get id(): Id {
    return this.attributes.id
  }

  get title(): Title {
    return this.attributes.title
  }

  isEmpty(): boolean {
    return NoteValidations.isEmpty(this)
  }
}
