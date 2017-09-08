// @flow

import { expect } from 'chai'
import * as Content from 'core/content'
import NoteEntity from '../entity'
import * as NoteValidations from './index'

describe('Note validations', () => {
  describe('#noTitle', () => {
    describe('with no title', () => {
      it('is true', () => {
        const note: NoteEntity = new NoteEntity()
        expect(NoteValidations.noTitle(note)).to.be.true
      })
    })

    describe('otherwise', () => {
      it('is false', () => {
        const note: NoteEntity = new NoteEntity({
          title: 'Greetings'
        })
        expect(NoteValidations.noTitle(note)).to.be.false
      })
    })
  })

  describe('#isEmpty', () => {
    describe('with no title and body', () => {
      it('is true', () => {
        const note: NoteEntity = new NoteEntity()
        expect(NoteValidations.isEmpty(note)).to.be.true
      })
    })

    describe('with a title', () => {
      it('is false', () => {
        const note: NoteEntity = new NoteEntity({
          title: 'Greetings'
        })
        expect(NoteValidations.isEmpty(note)).to.be.false
      })
    })
  })
})
