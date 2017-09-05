// @flow

import uuid from 'uuid'
import { EditorState } from 'draft-js'

const defaults = (): NoteOptions => ({
  id: uuid.v4(),
  title: '',
  slug: '',
  content: EditorState.createEmpty()
})

export class Page implements Note {
  id: Id
  title: Title
  slug: Slug
  content: EditorContent

  constructor(options: NoteOptions = {}) {
    const defaultOptions = defaults()
    const config = { ...defaultOptions, ...options }
    const { id, title, slug, content } = config

    this.id = id
    this.title = title
    this.slug = slug
    this.content = content
  }

  update(content: EditorContent): Note {
    const { id, title, slug } = this
    return new Page({ id, title, slug, content })
  }
}

export class Notes {
  static create(slug: Slug = ''): Note {
    return new Page({ slug })
  }
}
