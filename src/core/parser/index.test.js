// @flow

import { expect } from 'chai'
import * as notes from './index'

describe("parsing markdown", () => {
  it("converts to HTML", () => {
    expect(notes.parse('# hey')).to.eql('<h1>hey</h1>')
  })
})
