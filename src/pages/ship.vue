<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui/components/Table.vue'
import type { Schemas } from '@/spec.yml.client.ts'
import {useMutation, useQuery, useQueryClient} from '@tanstack/vue-query'
import {capitalize, computed, h, ref, resolveComponent} from 'vue'
import { useRoute } from 'vue-router'
import { useAgentStore } from '@/stores/agent.ts'

const UButton = resolveComponent('UButton')

const route = useRoute()

const breadcrumbItems = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Ships',
    to: '/ships',
  },
  {
    label: route.params.id as string
  }
])

const store = useAgentStore()
const query = useQuery({
  queryFn: () => store.agentApi.get('/my/ships/{shipSymbol}', {
    path: {
      shipSymbol: route.params.id as string,
    },
  }),
  queryKey: ['ships', route.params.id],
})

const queryClient = useQueryClient();
const shipOrbitMutation = useMutation({
  mutationFn: () => store.agentApi.post('/my/ships/{shipSymbol}/orbit', {
    path: {
      shipSymbol: route.params.id as string,
    },
  }),
  onSuccess: () => {
    return queryClient.invalidateQueries({ queryKey: ['ships', route.params.id] })
  },
})

const shipDockMutation = useMutation({
  mutationFn: () => store.agentApi.post('/my/ships/{shipSymbol}/dock', {
    path: {
      shipSymbol: route.params.id as string,
    },
  }),
  onSuccess: () => {
    return queryClient.invalidateQueries({ queryKey: ['ships', route.params.id] })
  },
})

const shipSections = [
  {
    label: 'Navigation',
    icon: 'i-lucide-navigation',
    slot: 'navigation',
  },
  {
    label: 'Cargo',
    icon: 'i-lucide-package',
    slot: 'cargo',
  },
  {
    label: 'Modules',
    icon: 'i-lucide-puzzle',
    slot: 'modules',
  },
  {
    label: 'Misc',
    icon: 'i-lucide-align-justify',
    slot: 'misc',
  },
]

const modules = computed(() => {
  if (!query.data.value?.data) {
    return null
  }
  return query.data.value?.data.modules
})

const systemSymbol = computed(() => {
  if (!query.data.value?.data) {
    return undefined
  }
  return query.data.value?.data.nav.systemSymbol
})

const systemQuery = useQuery({
  queryFn: () => {
    if (!systemSymbol.value) {
      return null
    }
    return store.agentApi.get('/systems/{systemSymbol}/waypoints', {
      path: {
        systemSymbol: systemSymbol.value,
      },
      query: {
        page: 1,
        limit: 10,
      },
    })
  },
  queryKey: ['systems', systemSymbol, 'waypoints'],
})

const waypoints = computed(() => {
  if (!systemQuery.data.value?.data) {
    return null
  }
  return systemQuery.data.value?.data
})

const waypointsColumns: TableColumn<Schemas.Waypoint>[] = [
  {
    accessorKey: 'symbol',
    header: 'Symbol',
  },
  {
    accessorKey: 'type',
    header: ({ column }) => {
      const isSorted = column.getIsSorted()

      return h(UButton, {
        color: 'neutral',
        variant: 'ghost',
        label: 'Type',
        icon: isSorted ? (isSorted === 'asc' ? 'i-heroicons-arrow-up' : 'i-heroicons-arrow-down') : 'i-lucide-arrow-up-down',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      })
    },
  },
  {
    accessorKey: 'faction',
    header: 'Faction',
    cell: ({ row }) => {
      return row.getValue('faction').symbol ?? ''
    },
  },
  {
    header: 'Action',
    cell: ({ row }) => {
      return h(UButton, {
        color: 'primary',
        label: 'Navigate to',
        disabled: query.data.value?.data.nav.status !== 'IN_ORBIT',
        class: 'ml-auto',
        onClick: () => {
          console.log('Navigate to')
        },
      })
    },
  },
]
</script>

<template>
  <div class="space-y-4 my-4">
    <UBreadcrumb :items="breadcrumbItems" />

    <h1 class="text-3xl font-bold">
      {{ $route.params.id }} - Current Ship
    </h1>

    <ul>
      <li>Current System: {{ systemSymbol }}</li>
      <li>Status: {{ query.data.value?.data.nav.status }}</li>
    </ul>

    <USeparator />

    <UTabs class="items-start" orientation="vertical" variant="link" :items="shipSections">
      <template #navigation>
        <div class="space-y-4">
          <UCard>
            <template #header>
              <h2 class="text-lg font-semibold">
                Actions
              </h2>
            </template>

            <div class="flex items-center gap-2">
              <UButton color="primary" label="Launch to Orbit" :disabled="query.data.value?.data.nav.status === 'IN_ORBIT'" @click="shipOrbitMutation.mutate()" />
              <UButton color="primary" label="Dock Ship" :disabled="query.data.value?.data.nav.status === 'DOCKED'" @click="shipDockMutation.mutate()" />
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-lg font-semibold">
                Current Route
              </h2>
            </template>

            <ul>
              <li>Starting location: {{ query.data.value?.data.nav.route.origin }}</li>
              <li>Target location: {{ query.data.value?.data.nav.route.destination }}</li>
              <li>Departure: {{ query.data.value?.data.nav.route.departureTime }}</li>
              <li>Arrival: {{ query.data.value?.data.nav.route.arrival }}</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-lg font-semibold">
                Possible Waypoints
              </h2>
            </template>

            <UTable :data="waypoints" :columns="waypointsColumns" :loading="systemQuery.isFetching" />
          </UCard>
        </div>
      </template>

      <template #cargo>
        <UCard>
          <template #header>
            <h2 class="text-lg font-semibold">
              Cargo
            </h2>

            <div>
              <UProgress :model-value="query.data.value?.data.cargo.units" :max="query.data.value?.data.cargo.capacity" status />

              <div class="flex justify-between items-center mt-2">
                <span class="text-sm text-gray-500">0</span>
                <span class="text-sm text-gray-500">{{ query.data.value?.data.cargo.capacity }}</span>
              </div>
            </div>
          </template>

          <ul>
            <li>
              Empty
            </li>
          </ul>
        </UCard>
      </template>

      <template #modules>
        <div class="grid grid-cols-3 gap-4">
          <UCard v-for="module in modules" :key="module.symbol">
            <template #header>
              {{ module.name }}
            </template>

            <div class="space-y-3">
              <p>{{ module.description }}</p>

              <p class="font-semibold mb-1">Requirements</p>

              <ul>
                <li v-for="(req_value, req_name) in module.requirements" :key="req_name">
                  {{ capitalize(req_name) }}: {{ req_value }}
                </li>
              </ul>
            </div>
          </UCard>
        </div>
      </template>

      <template #misc>
        <UCard v-if="query.data.value?.data.crew.capacity > 0">
          <template #header>
            <h2 class="text-lg font-semibold">
              Crew
            </h2>

            <div>
              <UProgress :model-value="query.data.value?.data.crew.current" :max="query.data.value?.data.crew.capacity">
                <template #status>
                  {{ query.data.value?.data.crew.current }}
                </template>
              </UProgress>

              <div class="flex justify-between items-center mt-2">
                <span class="text-sm text-gray-500">0</span>
                <span class="text-sm text-gray-500">{{ query.data.value?.data.crew.capacity }}</span>
              </div>
            </div>
          </template>

          <ul>
            <li>
              Rotation type: {{ query.data.value?.data.crew.rotation }}
            </li>
            <li>
              Current morale: {{ query.data.value?.data.crew.morale }}
            </li>
            <li>
              Current wages: {{ query.data.value?.data.crew.wages }}
            </li>
          </ul>
        </UCard>
      </template>
    </UTabs>

    <USeparator />

    <div class="space-y-2">


      <!--      <ul>
        <li v-for="waypoint in systemQuery.data.value?.data" :key="waypoint.symbol">
          {{ waypoint.symbol }} - {{ waypoint.type }}
        </li>
      </ul> -->


<!--      <pre>{{ waypoints }}</pre>-->
    </div>

    <pre>{{ query.data.value?.data }}</pre>
  </div>
</template>
