<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
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
      </div>
      <NoteCard v-for="note in notes" :key="note.id" :note="note" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NoteCard from '@/components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)
const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint utullam culpa nulla molestia'
  },
  {
    id: 'id2',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 2'
  }
])

const addNote = () => {
  let id = new Date().getTime().toString()
  let note = {
    id,
    content: newNote.value
  }

  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value.focus()
}
</script>
