<script setup lang="ts">
import usePosts from '@/hooks/usePosts'
import { onMounted, ref, defineProps } from 'vue'

const { posts, addPost } = usePosts()
const searchInput = ref('default searchInput')
const searchInputChangeCount = ref(0)

const handleInputChange = () => {
  searchInputChangeCount.value++
}

onMounted(() => {
  addPost('haha')
  console.log('lmao')
})
</script>

<template>
  <h1>Posts.vue</h1>
  <h3 v-for="post in posts" :key="post">{{ post }}</h3>
  <button @click="addPost(searchInput)">Add post</button>
  <!-- @input (fires when user changes input value) instead of @change (fires when user changed value and unfocus input (for example clicked somewhere outside)) -->
  <input
    v-model="searchInput"
    placeholder="Enter search"
    @input="handleInputChange"
  />
  Input has changed {{ searchInputChangeCount }} times.
</template>

<style lang="scss" scoped></style>
