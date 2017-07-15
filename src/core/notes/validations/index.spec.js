import { expect } from "chai"
import NoteEntity from "../entity"
import * as NoteValidations from "./index"

describe("Note validations", () => {

  describe("#noContent", () => {
    describe("with no content", () => {
      it("is true", () => {
        const note: NoteEntity = new NoteEntity()
        expect(NoteValidations.noContent(note)).to.be.true
      })
    })

    describe("otherwise", () => {
      it("is false", () => {
        const note: NoteEntity = new NoteEntity({ content: "# Hi! " })
        expect(NoteValidations.noContent(note)).to.be.false
      })
    })
  })

  describe("#noTitle", () => {
    describe("with no title", () => {
      it("is true", () => {
        const note: NoteEntity = new NoteEntity()
        expect(NoteValidations.noTitle(note)).to.be.true
      })
    })

    describe("otherwise", () => {
      it("is false", () => {
        const note: NoteEntity = new NoteEntity({ title: "Greetings" })
        expect(NoteValidations.noTitle(note)).to.be.false
      })
    })
  })

  describe("#isEmpty", () => {
    describe("with no title and body", () => {
      it("is true", () => {
        const note: NoteEntity = new NoteEntity()
        expect(NoteValidations.isEmpty(note)).to.be.true
      })
    })

    describe("with content", () => {
      it("is false", () => {
        const note: NoteEntity = new NoteEntity({ content: "# Hi! " })
        expect(NoteValidations.isEmpty(note)).to.be.false
      })
    })

    describe("with a title", () => {
      it("is false", () => {
        const note: NoteEntity = new NoteEntity({ title: "Greetings" })
        expect(NoteValidations.isEmpty(note)).to.be.false
      })
    })
  })

})
