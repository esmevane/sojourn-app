// @flow

import events from 'events'
import NoteEntity from './entity'

const { EventEmitter } = events

export const NOTES_GET = 'notes.get'
export const NOTES_FIND = 'notes.find'
export const NOTES_CREATE = 'notes.create'
export const NOTES_UPDATE = 'notes.update'
export const NOTES_REMOVE = 'notes.remove'

export default class Notes implements Repo<Note> {
  events: EventEmitter = new EventEmitter()
  store: Storage

  constructor(store: Storage) {
    this.store = store
  }

  actions(): Array<string> {
    return [
      NOTES_GET,
      NOTES_FIND,
      NOTES_CREATE,
      NOTES_UPDATE,
      NOTES_REMOVE
    ]
  }

  async create(note: Note): Promise<Note> {
    await this.store.put(note.id, note)

    this.events.emit(NOTES_CREATE, note)

    return await this.store.get(note.id)
  }

  async find(): Promise<Array<Note>> {
    const notes: Array<Note> = await this.store.all()
    this.events.emit(NOTES_FIND, notes)
    return notes
  }

  async get(id: string): Promise<Note> {
    const note: NoteEntity = await this.store.get(id)
    this.events.emit(NOTES_GET, note)
    return note
  }

  async init(): Promise<Note> {
    return new NoteEntity()
  }

  on(channel: string, listener: Function) {
    this.events.on(channel, listener)
  }

  off(channel: string, listener: Function) {
    this.events.removeListener(channel, listener)
  }

  async remove(note: Note): Promise<void> {
    await this.store.remove(note.id)
    this.events.emit(NOTES_REMOVE, note)
  }

  async update(note: Note): Promise<Note> {
    await this.store.put(note.id, note)

    this.events.emit(NOTES_UPDATE, note)

    return await this.store.get(note.id)
  }
}
