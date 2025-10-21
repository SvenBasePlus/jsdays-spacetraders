<script setup lang="ts">
import {Schemas} from "@/spec.yml.client.ts";

defineProps<{
  ship: Schemas.Ship
}>()
</script>

<template>
  <div>
    <RouterLink :to="`/ships/${ship.symbol}`">
      <UCard>
        <template #header>
          <h2 class="text-lg font-semibold">
            {{ ship.symbol }}
          </h2>

          <span class="text-gray-500">{{ ship.registration.role }}</span>
        </template>
      </UCard>
    </RouterLink>
  </div>
</template>
