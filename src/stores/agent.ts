import type { Fetcher } from '@/spec.yml.client'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { createApiClient } from '@/spec.yml.client'

const API_BASE_URL = 'https://api.spacetraders.io/v2'

export const useAgentStore = defineStore('agent', () => {
  const token = ref<string | undefined>(undefined)
  const isAuthenticated = computed(() => token.value !== undefined)

  function promptForToken() {
    // eslint-disable-next-line no-alert
    const newToken = prompt('Bitte gebe deinen Agent Token ein:')
    if (newToken !== null) {
      token.value = newToken
    }
  }

  const defaultFetcher: Fetcher['fetch'] = async (input) => {
    const headers = new Headers()

    // Handle query parameters
    if (input.urlSearchParams) {
      input.url.search = input.urlSearchParams.toString()
    }

    // Handle request body for mutation methods
    const body = ['post', 'put', 'patch', 'delete'].includes(input.method.toLowerCase()) ? JSON.stringify(input.parameters?.body) : undefined

    if (body) {
      headers.set('Content-Type', 'application/json')
    }

    // Add custom headers
    if (input.parameters?.header) {
      Object.entries(input.parameters.header).forEach(([key, value]) => {
        if (value != null) {
          headers.set(key, String(value))
        }
      })
    }

    // Set Authorization header
    if (token.value !== undefined) {
      headers.set('Authorization', `Bearer ${token.value}`)
    }

    const response = await fetch(input.url, {
      method: input.method.toUpperCase(),
      ...(body && { body }),
      headers,
      ...input.overrides,
    })

    return response
  }

  const agentApi = createApiClient({ fetch: defaultFetcher }, API_BASE_URL)

  return {
    token,
    promptForToken,
    isAuthenticated,
    agentApi,
  }
})
