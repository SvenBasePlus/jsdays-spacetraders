<script lang="ts" setup>
import AgentInfo from './components/AgentInfo.vue';
import { useAgentStore } from './stores/agent';
import { storeToRefs } from 'pinia'

const agentStore = useAgentStore()
const { isAuthenticated } = storeToRefs(agentStore)
</script>

<template>
  <div v-if="!isAuthenticated" class="h-screen bg-gray-800 grid place-content-center gap-4">
    <h1 class="text-2xl text-white">
      Bitte melde dich mit deinem Agent Token an
    </h1>
    <button class="bg-blue-300 px-4 py-2 rounded text-white" @click="agentStore.promptForToken()">
      Anmelden
    </button>
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
  </div>
</template>
