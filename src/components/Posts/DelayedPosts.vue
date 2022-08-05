<script setup lang="ts">
import DelayedPost from './DelayedPost.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <DelayedPost :delay="0" />
        <DelayedPost :delay="2000" />
      </div>
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style scoped></style>
