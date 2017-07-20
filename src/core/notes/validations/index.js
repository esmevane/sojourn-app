// @flow

export const noContent = (note: Note): boolean =>
  note.content === undefined || note.content.length === 0

export const noTitle = (note: Note): boolean =>
  note.title === undefined || note.title.length === 0

export const isEmpty = (note: Note): boolean =>
  noTitle(note) && noContent(note)
