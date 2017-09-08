// @flow

import { expect } from 'chai'
import Store from '../../core/store'
import Notes, * as NotesEvents from './index'
import NoteEntity from './entity'

describe('Notes', () => {
  const store = new Store.Memory()
  const notes = new Notes(store)

  afterEach(() => store.flush())

  it('exists', () => {
    expect(Notes).to.be.ok
  })

  describe('#create', () => {
    const note = new NoteEntity()

    it('emits NOTES_SAVE, with note to listeners', () => {
      let saveContents: NoteEntity | null = null

      notes.on(
        NotesEvents.NOTES_CREATE,
        (note: NoteEntity) => (saveContents = note)
      )

      return notes
        .create(note)
        .then(() => expect(saveContents).to.eql(note))
    })

    it('promises a returned note', () => {
      return notes
        .create(note)
        .then(subject => expect(subject).to.eql(note))
    })
  })

  describe('#index', () => {
    const note = new NoteEntity()

    it('emits NOTES_INDEX with note to listeners', () => {
      let getResults: NoteEntity[] | null = null

      notes.on(
        NotesEvents.NOTES_FIND,
        (results: NoteEntity[]) => (getResults = results)
      )

      return notes
        .create(note)
        .then(() => notes.find())
        .then(() => expect(getResults).to.eql([note]))
    })

    it('promises a returned notes list', () => {
      return notes
        .create(note)
        .then(() => notes.find())
        .then(subject => expect(subject).to.eql([note]))
    })
  })

  describe('#get', () => {
    const note = new NoteEntity()

    it('emits NOTES_FIND with note to listeners', () => {
      let getResult: NoteEntity | null = null

      notes.on(
        NotesEvents.NOTES_GET,
        (note: NoteEntity) => (getResult = note)
      )

      return notes
        .create(note)
        .then(() => notes.get(note.id))
        .then(() => expect(getResult).to.eql(note))
    })

    it('promises a returned note', () => {
      return notes
        .create(note)
        .then(() => notes.get(note.id))
        .then(subject => expect(subject).to.eql(note))
    })
  })

  describe('#init', () => {
    it('promises a new note', () => {
      return notes
        .init()
        .then(subject => expect(subject.isEmpty()).to.be.true)
    })
  })

  describe('#update', () => {
    const note = new NoteEntity()

    it('emits NOTES_UPDATE, with note to listeners', () => {
      let updateContents: NoteEntity | null = null

      notes.on(
        NotesEvents.NOTES_UPDATE,
        (note: NoteEntity) => (updateContents = note)
      )

      return notes
        .create(note)
        .then(() => notes.update(note))
        .then(() => expect(updateContents).to.eql(note))
    })

    it('promises the updated note', () => {
      return notes
        .create(note)
        .then(() => notes.update(note))
        .then(subject => expect(subject).to.eql(note))
    })
  })

  describe('#remove', () => {
    const note = new NoteEntity()

    it('emits NOTES_REMOVE', () => {
      let wasCalled: boolean = false

      notes.on(NotesEvents.NOTES_REMOVE, () => (wasCalled = true))

      return notes
        .remove(note)
        .then(() => expect(wasCalled).to.be.true)
    })

    it('removes the note', () => {
      return notes
        .create(note)
        .then(note => expect(note).to.eql(note))
        .then(() => notes.remove(note))
        .then(subject => expect(subject).to.be.undefined)
    })

    it('returns an empty promise', () => {
      return notes
        .remove(note)
        .then(subject => expect(subject).to.be.undefined)
    })
  })
})
