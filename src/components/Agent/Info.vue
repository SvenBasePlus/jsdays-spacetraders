<script lang="ts" setup>
import type { DropdownMenuItem } from '@nuxt/ui'
import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { useAgentStore } from '@/stores/agent'

const store = useAgentStore()

const { data } = useQuery({
  queryFn: () => store.agentApi.get('/my/agent'),
  queryKey: ['agent'],
})

const items = computed((): DropdownMenuItem[] => ([
  [{ label: data.value?.data.symbol, type: 'label' }],
  [{ label: 'Abmelden', icon: 'material-symbols:logout-rounded', onSelect: () => store.logout() }],
]))
</script>

<template>
  <UDropdownMenu
    v-if="data"
    :items="items"
    size="lg"
    :content="{ align: 'end' }"
  >
    <div class="bg-gray-100 rounded py-2 px-4 border-l-8 border-blue-300">
      <div class="flex items-center gap-3">
        <UUser
          :name="data.data.symbol"
          :description="data.data.startingFaction"
        />
        <UIcon name="material-symbols:keyboard-arrow-down-rounded" class="size-5" />
      </div>
    </div>
  </UDropdownMenu>
</template>
