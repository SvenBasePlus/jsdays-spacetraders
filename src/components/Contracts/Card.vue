<script setup lang="ts">
import type { Schemas } from '@/spec.yml.client.ts';

defineProps<{
  contract: Schemas.Contract
}>()
defineEmits<{
  (e: 'accept', id: string): void
}>()
</script>

<template>
  <div>
    <UCard>
      <template #header>
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-lg font-semibold">{{ contract.type }}</h2>
            <span class="text-gray-500 text-sm">{{ contract.id }}</span>
          </div>

          <span
            class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring"
            :class="{
              'bg-yellow-50 text-yellow-800 inset-ring-yellow-600/20': !contract.accepted,
              'bg-green-50 text-green-800 inset-ring-green-600/20': contract.accepted,
            }"
          >
            {{ contract.accepted ? 'Accepted' : 'Pending' }}
          </span>
        </div>
      </template>

      <p><span class="font-semibold mb-3 inline-block">Deadline: </span> {{ contract.terms.deadline }}</p>

      <div>
        <h3 class="text-lg font-semibold">Payment</h3>

        <ul class="list-disc">
          <li><span class="font-semibold">On accepted:</span> {{ contract.terms.payment.onAccepted }}</li>
          <li><span class="font-semibold">On fulfillmed:</span> {{ contract.terms.payment.onFulfilled }}</li>
        </ul>
      </div>

      <template #footer>
        <div class="flex justify-end">
          <UButton v-if="!contract.accepted" @click="$emit('accept', contract.id)">
            Accept
          </UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>
