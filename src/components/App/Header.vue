<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import AgentInfo from '@/components/Agent/Info.vue'
import { useAgentStore } from '@/stores/agent'
import {computed} from "vue";
import type {NavigationMenuItem} from "@nuxt/ui/components/NavigationMenu.vue";
import {useRoute} from "vue-router";

const agentStore = useAgentStore()
const { isAuthenticated } = storeToRefs(agentStore)

const route = useRoute()

const navItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Ships',
    to: '/ships',
    active: route.path.startsWith('/ships'),
  },
  {
    label: 'Contracts',
    to: '/contracts',
    active: route.path.startsWith('/contracts'),
  }
])
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

    <UNavigationMenu :items="navItems" />

    <template #right>
      <UColorModeButton />

      <AgentInfo v-if="isAuthenticated" />
      <UButton v-else @click="agentStore.promptForToken()">
        Anmelden
      </UButton>
    </template>
  </UHeader>
</template>
