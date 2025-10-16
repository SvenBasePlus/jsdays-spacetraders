<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { useAgentStore } from '@/stores/agent'

const store = useAgentStore()
const { data, refetch } = useQuery({
  queryFn: () => store.agentApi.get('/my/agent'),
  queryKey: ['agent'],
})
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
    <button @click="refetch()">
      Refetch
    </button>
  </div>
</template>
