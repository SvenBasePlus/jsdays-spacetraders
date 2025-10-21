<script lang="ts" setup>
import AppHeader from '@/components/App/Header.vue'
import AppSidebar from '@/components/App/Sidebar.vue'
</script>

<template>
  <UApp>
    <AppHeader />
    <AppSidebar />
    <UMain>
      <UContainer>
        <RouterView />
      </UContainer>
    </UMain>
  </UApp>
</template>
