<script setup>
const message = 'Text'
</script>

<template>
  <div class="flex gap-2">
    <slot name="icon" />
    <slot name="heading" />
    <slot :message="message" :count="1">
      <!-- Default content here -->
    </slot>
  </div>
</template>
