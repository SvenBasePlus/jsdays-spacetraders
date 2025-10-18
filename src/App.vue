<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import AgentInfo from './components/AgentInfo.vue'
import { useAgentStore } from './stores/agent'

const agentStore = useAgentStore()
const { isAuthenticated } = storeToRefs(agentStore)
</script>

<template>
  <UApp>
    <div v-if="!isAuthenticated" class="h-screen bg-gray-800 grid place-content-center gap-4">
      <h1 class="text-2xl text-white">
        Bitte melde dich mit deinem Agent Token an
      </h1>

      <UButton
        color="info"
        size="xl"
        @click="agentStore.promptForToken()"
      >
        Anmelden
      </UButton>
    </div>
    <div v-else class="min-h-screen bg-gray-200 p-10">
      <h1 class="text-2xl font-semibold">
        You did it!
      </h1>
      <p>
        Visit <a href="https://vuejs.org/" class="underline" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
      </p>

      <AgentInfo />

      <UButton
        color="error"
        size="xl"
        @click="agentStore.logout()"
      >
        Abmelden
      </UButton>
    </div>
  </UApp>
</template>
