<script setup>
  import MenuHeader from '@/components/MenuHeader.vue'
</script>

<template>
  <div v-if="$route.name=='LoginPage'">
    <router-view></router-view>
  </div>

  <div v-else-if="$route.name=='RegisterPage'">
    <router-view></router-view>
  </div>

  <div v-else>
    <MenuHeader></MenuHeader>
  </div>
</template>

<style scoped>

</style>