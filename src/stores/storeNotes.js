import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint utullam culpa nulla molestia'
        },
        {
          id: 'id2',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 2'
        }
      ]
    }
  },
  actions: {
    addNote(newNote) {
      let id = new Date().getTime().toString()
      let note = {
        id,
        content: newNote
      }

      this.notes.unshift(note)
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id)
      this.notes[index].content = content
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id)
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => state.notes.filter((note) => note.id === id)[0].content
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      return state.notes.reduce((accumulator, note) => accumulator + note.content.length, 0)
    }
  }
})
