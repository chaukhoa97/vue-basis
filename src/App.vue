<script setup lang="ts">
import GreetingText from './components/Greetings/GreetingText.vue'
import WelcomeList from './components/Greetings/WelcomeList.vue'
import Posts from './components/Posts/Posts.vue'
import DelayedPosts from './components/Posts/DelayedPosts.vue'
</script>

<template>
  <GreetingText msg="Custom message" />
  <WelcomeList />
  <Posts />
  <DelayedPosts />
</template>

<style scoped></style>
