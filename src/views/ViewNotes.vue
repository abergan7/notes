<template>
  <div class="notes">
    <!-- <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            :disabled="!newNote"
            @click="addNote"
          >
            Add New Note
          </button>
        </div>
      </div> -->
    <AddEditNote v-model="newNote" placeholder="Add a new note" ref="addEditNoteRef">
      <template #buttons>
        <button class="button is-link has-background-success" :disabled="!newNote" @click="addNote">
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <!-- <NoteCard
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
        @deleteClicked="deleteNote"
      /> -->
  </div>
  <NoteCard v-for="note in storeNotes.notes" :key="note.id" :note="note" />
</template>

<script setup>
import { ref } from 'vue'
import NoteCard from '@/components/Notes/NoteCard.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

import { useWatchCharacters } from '@/use/useWatchCharacters'

import { useStoreNotes } from '@/stores/storeNotes'

// store
const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

// add note
const addNote = () => {
  storeNotes.addNote(newNote.value)

  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

// watch characters
useWatchCharacters(newNote)

// // delete note
// const deleteNote = (id) => {
//   storeNotes.deleteNote(id)
// }
</script>
