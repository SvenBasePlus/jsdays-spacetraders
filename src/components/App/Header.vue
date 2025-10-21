<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import AgentInfo from '@/components/Agent/Info.vue'
import { useAgentStore } from '@/stores/agent'

const agentStore = useAgentStore()
const { isAuthenticated } = storeToRefs(agentStore)
</script>

<template>
  <UHeader>
    <template #title>
      <div class="flex items-center gap-2 text-blue-400">
        <UIcon name="streamline-ultimate:space-rocket-earth" class="size-7" />
        <h1>
          SpaceTraders
        </h1>
      </div>
    </template>

    <template #right>
      <AgentInfo v-if="isAuthenticated" />
      <UButton v-else @click="agentStore.promptForToken()">
        Anmelden
      </UButton>
    </template>
  </UHeader>
</template>
