<script lang="ts" setup>
import AppHeader from '@/components/App/Header.vue'
</script>

<template>
  <UApp>
    <AppHeader />
    <UMain>
      <UContainer>
        <RouterView />
      </UContainer>
    </UMain>
  </UApp>
</template>
