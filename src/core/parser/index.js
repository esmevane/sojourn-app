// @flow

import { markdown } from "markdown"
import { sanitize as domSanitizer } from "dompurify"

const sanitize =
  process.env.NODE_ENV === 'test'
    ? string => string
    : domSanitizer

export const parse: Parse = content =>
  sanitize(markdown.toHTML(content))
