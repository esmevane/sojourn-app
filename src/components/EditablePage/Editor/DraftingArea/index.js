// @flow
//

import React, { Component } from 'react'
import { Editor } from 'draft-js'
import * as State from './state'
import { updateEditor } from 'actions'

import "draft-js/dist/Draft.css"

class DraftingArea extends Component {
  editor: typeof Editor
  state: HasEditorState = State.init()

  componentDidMount() {
    this.editor.focus()
  }

  render() {
    const update = (editorState) =>
      this.setState(
        State.update(this.state, updateEditor(editorState))
      )

    return(
      <Editor
        ref={ editor => this.editor = editor }
        placeholder="Hello!  I'm an editor!"
        editorState={ this.state.editorState }
        onChange={update}
      />
    )
  }
}

export default DraftingArea
