declare type Id = string
declare type Title = string
declare type Slug = string
declare type EditorContent = Draft.EditorState
declare type Pages = object<Slug, Note>
declare type TextContent = string

declare type HasChildren = { children?: any }
declare type HasEditorState = { editorState: Draft$EditorState }
declare type HasInsertPage = { insertPage: (page: Note) => void }
declare type HasKey = { key: string }
declare type HasLocation = { location: History$Location }
declare type HasPage = { page: Note }
declare type HasUpdate = { update: (theUpdate: any) => any }
declare type PageContent = { +page: Note }

declare type Stylesheet = { [string]: string }

declare type Action =
  | { +type: string, +payload?: any }
  | {| +type: 'InsertPage', +payload: Note |}
  | {| +type: 'RemovePage', +payload: Slug |}

declare type NoteOptions = {
  id?: Id,
  slug?: Slug,
  title?: Title,
  content?: EditorContent
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
  get(key: string): any,
  all(): Array<any>,
  put(key: Id, value: any): void,
  remove(key: string): void,
  flush(): void
}

declare interface Note {
  +id: Id,
  +slug: Slug,
  +title: Title,
  +content: EditorContent
}
