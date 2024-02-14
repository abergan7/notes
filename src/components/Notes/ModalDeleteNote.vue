<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete note?</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">Are you sure you want to delete it?</section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button is-danger" @click="storeNotes.deleteNote(props.noteId)">
          Delete
        </button>
        <button @click="closeModal" class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
// props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  noteId: {
    type: String,
    required: true
  }
})

// store
const storeNotes = useStoreNotes()

//emits
const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
  emit('update:modelValue', false)
}

// keyboard control

const handleKeyboard = (e) => {
  e.key === 'Escape' && closeModal()
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard)
})
</script>
