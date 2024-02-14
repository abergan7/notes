<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">{{ props.note.content }}</div>
      <div class="has-text-right has-grey-light mt-2">
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${props.note.id}`" href="#" class="card-footer-item"
        >Edit</RouterLink
      >
      <a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true">Delete</a>
    </footer>
    <ModalDeleteNote
      :noteId="props.note.id"
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
    ></ModalDeleteNote>
  </div>
</template>

<script setup>
// imports
import { computed, reactive } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'

//store
const storeNotes = useStoreNotes()

// props
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

// emits
// const emit = defineEmits(['deleteClicked'])

// character length
const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

// modals
const modals = reactive({
  deleteNote: false
})

// handleDeleteClicked
// const handleDeleteClicked = () => {
//   emit('deleteClicked', props.note.id)
// }
</script>
