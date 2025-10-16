import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ofetch } from 'ofetch'

export const useAgentStore = defineStore('agent', () => {
  const token = ref<string | undefined>(undefined)
  const isAuthenticated = computed(() => token.value !== undefined)

  function promptForToken() {
    const newToken = prompt('Bitte gebe deinen Agent Token ein:')
    if (newToken !== null) {
      token.value = newToken
    }
  }

  const agentApi = ofetch.create({
    baseURL: 'https://api.spacetraders.io/v2',
    headers: {
      'Content-Type': 'application/json',
    },
    onRequest({ options }) {
      if (token.value !== undefined) {
        options.headers.set('Authorization', `Bearer ${token.value}`)
      }
    }
  })

  return {
    token,
    promptForToken,
    isAuthenticated,
    agentApi
  }
})
