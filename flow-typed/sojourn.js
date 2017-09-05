declare type Id = string
declare type Title = string
declare type Slug = string
declare type EditorContent = Draft$EditorState
declare type Pages = object<Slug, Note>

declare interface Note {
  +id: Id,
  +slug: Slug,
  +title: Title,
  +content: EditorContent,
  update(content: EditorContent): Note
}

declare type NoteOptions = {
  id?: Id,
  slug?: Slug,
  title?: Title,
  content?: EditorContent
}

declare type Action =
  | { +type: string, +payload?: any }
  | {| +type: 'InsertPage', +payload: Note |}
  | {| +type: 'RemovePage', +payload: Slug |}

declare type Showable = { +show: boolean }
declare type PageContent = { +page: Note }
declare type RecordState<T> = {
  +records: object<string, T>
}

declare type UiState = {
  +drawer: Showable,
  +menu: Showable,
  +modal: Showable
}

declare type State = { +ui: UiState, +pages: RecordState<Note> }
declare type HasChildren = { children?: any }
declare type HasEditorState = { editorState: Draft$EditorState }
declare type HasPage = { page: Note }
declare type HasInsertPage = { insertPage: (page: Note) => void }
declare type HasKey = { key: string }
declare type HasLocation = { location: History$Location }

declare type Stylesheet = { [string]: string }
