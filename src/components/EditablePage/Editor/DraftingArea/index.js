// @flow
//

import 'draft-js/dist/Draft.css'
import 'draft-js-inline-toolbar-plugin/lib/plugin.css'
import 'draft-js-side-toolbar-plugin/lib/plugin.css'

import React, { Component } from 'react'
import Editor from 'draft-js-plugins-editor'
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin'
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'
import { connectPageEditor } from 'state'
import { Container } from './styles'

const sideToolbarPlugin = createSideToolbarPlugin()
const inlineToolbarPlugin = createInlineToolbarPlugin()
const { SideToolbar } = sideToolbarPlugin
const { InlineToolbar } = inlineToolbarPlugin

type DraftingProps = {
  page: Note,
  insertPage: (page: Note) => void,
  onFocus: () => void
}

export class DraftingArea extends Component<DraftingProps, {}> {
  editor: typeof Editor

  componentDidMount() {
    this.editor.focus()
  }

  render() {
    const { page, insertPage } = this.props
    const update = editorState => insertPage(page.update(editorState))

    if (!page.content) return <div />

    return (
      <Container>
        <Editor
          ref={editor => (this.editor = editor)}
          editorState={page.content}
          plugins={[sideToolbarPlugin, inlineToolbarPlugin]}
          onChange={update}
        />
        <SideToolbar />
        <InlineToolbar />
      </Container>
    )
  }
}

export default connectPageEditor(DraftingArea)
