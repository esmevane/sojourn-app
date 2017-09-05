// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { stateToHTML } from 'draft-js-export-html'

const Viewer = ({ page }: any): React$Element<any> =>
  <div>
    <Link to="/edit">Edit</Link>
    <div
      dangerouslySetInnerHTML={{
        __html: stateToHTML(page.content.getCurrentContent())
      }}
    />
  </div>

export default Viewer
