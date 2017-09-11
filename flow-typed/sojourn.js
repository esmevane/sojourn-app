declare type Id = string
declare type Title = string
declare type Slug = string
declare type EditorContent = Draft.EditorState
declare type Pages = object<Slug, Note>
declare type TextContent = string
declare type Channel = string

declare type HasChildren = { children?: any }
declare type HasEditorState = { editorState: Draft$EditorState }
declare type HasInsertPage = { insertPage: (page: Note) => void }
declare type HasKey = { key: string }
declare type HasLocation = { location: History$Location }
declare type HasPage = { page: Note }
declare type HasUpdate = { update: (theUpdate: any) => any }
declare type PageContent = { +page: Note }

declare type Stylesheet = { [string]: string }
declare type Action = { +type: string, +payload?: any }
declare type RequestPageError = { error: Error, id: Id }

declare type RawNote = {
  id: Id,
  slug: Slug,
  title: Title,
  content: {}
}

declare type NoteOptions = {
  id?: Id,
  slug?: Slug,
  title?: Title,
  content?: EditorContent
}

declare type EventChannel = {
  take: Function,
  flush: Function,
  close: Function
}

declare type NoteAttributes = {
  id: Id,
  slug: Slug,
  title: Title,
  content: EditorContent
}

declare type RecordState<T> = {
  +records: object<string, T>
}

declare type Showable = { +show: boolean }
declare type UiState = {
  +drawer: Showable,
  +menu: Showable,
  +modal: Showable
}

declare type State = { +ui: UiState, +pages: RecordState<Note> }

declare interface Storage {
  get(key: string): Promise<any>,
  all(): Promise<Array<any>>,
  put(key: Id, value: any): Promise<void>,
  remove(key: string): Promise<void>,
  flush(): Promise<void>
}

declare interface Repo<E> {
  events: Node$EventEmitter,
  store: Storage,

  actions(): Array<string>,
  create(entity: E): Promise<E>,
  find(): Promise<Array<E>>,
  get(id: Id): Promise<E>,
  init(): Promise<E>,
  on(channel: Channel, listener: Function): void,
  off(channel: string, listener: Function): void,
  remove(note: E): Promise<void>,
  update(note: E): Promise<E>
}

declare interface Note {
  +id: Id,
  +slug: Slug,
  +title: Title,
  +content: EditorContent
}
