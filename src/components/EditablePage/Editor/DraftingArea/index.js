// @flow
//

import React, { Component } from 'react'
import { Editor } from 'draft-js'
import { connectPageEditor } from 'state'
import { Container } from './styles'

type DraftingProps = {
  page: Note & HasUpdate,
  insertPage: (page: Note) => void
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
          onChange={update}
        />
      </Container>
    )
  }
}

export default connectPageEditor(DraftingArea)
