<script lang="ts" setup>
import {useMutation, useQuery, useQueryClient} from '@tanstack/vue-query';
import { useAgentStore } from '@/stores/agent'

import ShipCard from '@/components/Ships/Card.vue'

const agentStore = useAgentStore()
const query = useQuery({
  queryFn: () => agentStore.agentApi.get('/my/ships', {
    query: {
      page: 1,
      limit: 10,
    },
  }),
  queryKey: ['ships'],
})

const queryClient = useQueryClient()
const mutation = useMutation({
  mutationFn: (id: string) => {
    return agentStore.agentApi.post('/my/contracts/' + id + '/accept', {
      path: {
        contractId: id,
      }
    })
  },
  onSuccess: () => {
    return queryClient.invalidateQueries({ queryKey: ['contracts'] })
  }
})
</script>

<template>
  <div class="space-y-4 my-4">
    <h1 class="text-3xl font-bold">Ships</h1>

    <div class="grid grid-cols-3 gap-4">
      <ShipCard
        v-for="ship in query.data.value.data"
        :key="ship.symbol"
        :ship="ship"
      />
    </div>

<!--    <pre>{{ query.data }}</pre>-->
  </div>
</template>
