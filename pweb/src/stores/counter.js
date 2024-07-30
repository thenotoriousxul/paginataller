import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('counter', () => {
  const title = ref('')


  function setTitle(newTitle) {
    title.value = newTitle
  }

  return { title, setTitle }
})
