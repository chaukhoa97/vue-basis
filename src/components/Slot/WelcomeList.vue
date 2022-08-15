<script setup lang="ts">
import CommunityIcon from './IconCommunity.vue'
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem class="p-2 mb-2 border">
    Default nè
    <template v-slot:icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
  </WelcomeItem>
  <WelcomeItem class="p-2 mb-4 border" v-slot="slotProps">
    {{ slotProps.message }}
    {{ slotProps.count }}
  </WelcomeItem>
</template>
