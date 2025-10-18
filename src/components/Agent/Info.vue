<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { useAgentStore } from '@/stores/agent'

const store = useAgentStore()
const { data } = useQuery({
  queryFn: () => store.agentApi.get('/my/agent'),
  queryKey: ['agent'],
})
</script>

<template>
  <div v-if="data" class="bg-gray-100 rounded py-2 px-4 border-r-8 border-blue-300">
    <UUser
      :name="data.data.symbol"
      :description="data.data.startingFaction"
    />
  </div>
</template>
