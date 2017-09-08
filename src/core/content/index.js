// @flow

import events from 'events'
import { ContentState, EditorState } from 'draft-js'

export const init = (): EditorContent => EditorState.createEmpty()
export const marshal = (text: TextContent): EditorContent =>
  EditorState.createWithContent(ContentState.createFromText(text))

export const create = async function(
  text: TextContent
): Promise<EditorContent> {
  return marshal(text)
}

export const update = async function(
  previous: EditorContent,
  nextState: EditorContent
): Promise<EditorContent> {
  return nextState
}
