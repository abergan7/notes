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
      <a href="#" class="card-footer-item" @click.prevent="storeNotes.deleteNote(props.note.id)"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
// imports
import { computed } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

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

// handleDeleteClicked
// const handleDeleteClicked = () => {
//   emit('deleteClicked', props.note.id)
// }
</script>
