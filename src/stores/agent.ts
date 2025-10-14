import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAgentStore = defineStore('agent', () => {
  const token = ref<string | undefined>(undefined)

  function promptForToken() {
    const newToken = prompt('Bitte gebe deinen Agent Token ein:')
    if (newToken !== null) {
      token.value = newToken
    }
  }

  return { token, promptForToken }
})
