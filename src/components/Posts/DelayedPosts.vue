<script setup lang="ts">
import DelayedPost from './DelayedPost.vue'
</script>

<template>
  <!-- <Suspense> -->
  <!-- <template #default> -->
  <DelayedPost :delay="0" />
  <DelayedPost :delay="2000" />
  <!-- </template> -->
  <!-- <template #fallback> Loading... </template> -->
  <!-- </Suspense> -->
</template>

<style scoped></style>
