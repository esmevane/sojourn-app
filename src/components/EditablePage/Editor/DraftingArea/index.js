// @flow
//

import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin'
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'

import 'draft-js/dist/Draft.css'
import 'draft-js-inline-toolbar-plugin/lib/plugin.css'
import 'draft-js-side-toolbar-plugin/lib/plugin.css'

const sideToolbarPlugin = createSideToolbarPlugin()
const inlineToolbarPlugin = createInlineToolbarPlugin()
const { SideToolbar } = sideToolbarPlugin
const { InlineToolbar } = inlineToolbarPlugin

class DraftingArea extends Component {
  editor: typeof Editor
  state: HasEditorState = {
    editorState: EditorState.createEmpty()
  }

  componentDidMount() {
    this.editor.focus()
  }

  render() {
    const update = editorState => this.setState({ editorState })

    return (
      <div>
        <Editor
          ref={editor => (this.editor = editor)}
          editorState={this.state.editorState}
          plugins={[sideToolbarPlugin, inlineToolbarPlugin]}
          onChange={update}
        />
        <SideToolbar />
        <InlineToolbar />
      </div>
    )
  }
}

export default DraftingArea
