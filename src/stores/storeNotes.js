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
    deleteNote(id) {
      this.notes = this.notes.filter((note) => {
        return note.id !== id
      })
    }
  }
})
