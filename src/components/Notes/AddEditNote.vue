<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="props.label" class="label has-text-white">{{ props.label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          v-autofocus
          :value="props.modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="textarea"
          maxlength="100"
          :placeholder="props.placeholder"
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
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type something'
  },
  label: {
    type: String
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

// directives
const vAutoFocus = {
  mounted: (element) => {
    element.focus()
  }
}
</script>
