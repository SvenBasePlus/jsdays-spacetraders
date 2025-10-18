<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import AgentInfo from '@/components/Agent/Info.vue'

import { useAgentStore } from '@/stores/agent'

const agentStore = useAgentStore()
const { isAuthenticated } = storeToRefs(agentStore)
</script>

<template>
  <UApp>
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
        <div v-if="isAuthenticated" class="flex items-center gap-2">
          <UButton @click="agentStore.logout()">
            Abmelden
          </UButton>
          <AgentInfo />
        </div>
        <UButton v-else @click="agentStore.promptForToken()">
          Anmelden
        </UButton>
      </template>
    </UHeader>

    <UMain>
      <UContainer>
        <RouterView />
      </UContainer>
    </UMain>
  </UApp>
</template>
