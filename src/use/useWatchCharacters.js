import { watch } from 'vue'
export function useWatchCharacters(valueToWatch, maxChars = 200) {
  watch(valueToWatch, (valueToWatch) => {
    if (valueToWatch.length === maxChars) alert(`You have already used ${maxChars} characters.`)
  })
}
