<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue'

const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
})

const getPost = async () =>
  await fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) =>
    res.json(),
  )

const post = ref(null)
post.value = await getPost()
console.log('post: ', post)

// setTimeout(getPost, props.delay)
</script>

<template>
  <h3>okkk</h3>
  <div>{{ JSON.stringify(post) }}</div>
  <!-- <div v-else>Kcg</div> -->
</template>

<style scoped></style>
