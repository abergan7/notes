<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="link"
      placeholder="Edit note"
      label="Edit note"
    >
      <template #buttons>
        <button class="button is-link has-background-link mr-2" @click="$router.push('/')">
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
          @click="handleSave"
        >
          Edit Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'

// route
const route = useRoute()
const router = useRouter()

// store
const storeNotes = useStoreNotes()

const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)

// save
const handleSave = () => {
  storeNotes.updateNote(route.params.id, noteContent)
  router.push('/')
}
</script>
