// @flow

import events from 'events'
import NoteEntity from './entity'

const { EventEmitter } = events

export const NOTES_GET = 'notes.get'
export const NOTES_FIND = 'notes.find'
export const NOTES_CREATE = 'notes.create'
export const NOTES_UPDATE = 'notes.update'
export const NOTES_REMOVE = 'notes.remove'

export default class Notes {
  events: EventEmitter = new EventEmitter()
  store: Storage

  constructor(store: Storage) {
    this.store = store
  }

  async create(note: NoteEntity): Promise<NoteEntity> {
    await this.store.put(note.id, note)

    this.events.emit(NOTES_CREATE, note)

    return await this.store.get(note.id)
  }

  async find(): Promise<Array<NoteEntity>> {
    const notes: Array<NoteEntity> = await this.store.all()
    this.events.emit(NOTES_FIND, notes)
    return notes
  }

  async get(id: string): Promise<NoteEntity> {
    const note: NoteEntity = await this.store.get(id)
    this.events.emit(NOTES_GET, note)
    return note
  }

  async init(): Promise<NoteEntity> {
    return new NoteEntity()
  }

  on(channel: string, listener: Function) {
    this.events.on(channel, listener)
  }

  async remove(note: NoteEntity): Promise<void> {
    await this.store.remove(note.id)
    this.events.emit(NOTES_REMOVE, note)
  }

  async update(note: NoteEntity): Promise<NoteEntity> {
    await this.store.put(note.id, note)

    this.events.emit(NOTES_UPDATE, note)

    return await this.store.get(note.id)
  }
}
