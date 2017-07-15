// @flow

import * as uuid from "uuid"
import * as NoteValidations from "../validations"

export default class NoteEntity implements Note {
  attributes: Note

  defaults: Note = {
    id: uuid.v4(),
    title: "",
    content: ""
  }

  constructor(attributes: Note = this.defaults) {
    this.attributes = { ...this.defaults, ...attributes }
  }

  get content(): Content { return this.attributes.content }
  get id(): Id { return this.attributes.id }
  get title(): Title { return this.attributes.title }

  isEmpty(): boolean {
    return NoteValidations.isEmpty(this)
  }
}
