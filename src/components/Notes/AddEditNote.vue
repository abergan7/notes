<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          :value="props.modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="textarea"
          placeholder="Add a new note"
          ref="textareaRef"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
    <!-- <NoteCard
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
        @deleteClicked="deleteNote"
      /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
// props
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const textareaRef = ref(null)

// focus textarea
const focusTextarea = () => {
  textareaRef.value.focus()
}

defineExpose({
  focusTextarea
})
</script>
