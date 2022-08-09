<script setup lang="ts">
import GreetingText from './components/Greetings/GreetingText.vue'
import WelcomeList from './components/Greetings/WelcomeList.vue'
import { Posts } from './components/Posts'
</script>

<template>
  <GreetingText msg="Custom message" />
  <WelcomeList />
  <Posts />
</template>

<style scoped></style>
