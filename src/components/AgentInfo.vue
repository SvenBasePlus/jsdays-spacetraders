<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { useAgentStore } from '@/stores/agent'

const store = useAgentStore()
const { data } = useQuery({
  queryFn: () => store.agentApi('/my/agent'),
  queryKey: ['agent'],
})
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
