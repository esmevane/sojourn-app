// @flow

import { EditorState } from 'draft-js'
import { UpdateEditor } from 'actions'

export const init = (): HasEditorState => (
  { editorState: EditorState.createEmpty() }
)

export const update = (
  state: EditorState = init(),
  action: Action
): HasEditorState => {
  switch (action.type) {
    case UpdateEditor:
      return { ...state, editorState: action.payload }
    default:
      return { ...state }
  }
}
