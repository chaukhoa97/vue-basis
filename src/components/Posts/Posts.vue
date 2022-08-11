<script setup lang="ts">
import usePosts from '@/hooks/usePosts'
import { ref, computed } from 'vue'
import Post from './Post.vue'
import AddPostForm from './AddPostForm.vue'

const { posts, addPost } = usePosts()

const searchInput = ref('')
const isAddingPost = ref(false)

const filteredPosts = computed(() =>
  posts.value.filter((n) =>
    n.title.toLowerCase().includes(searchInput.value.toLowerCase()),
  ),
)

const handleCancelAdding = () => {
  isAddingPost.value = false
}

const handleAdd = (input: string) => {
  addPost(input)
  isAddingPost.value = false
}
</script>

<template>
  <div>
    <input
      v-model="searchInput"
      placeholder="Filter post"
      class="mx-2 mb-4 input input-md input-primary w-96"
    />
    <Post
      v-for="(post, index) in filteredPosts"
      :key="post.id"
      :post="post"
      :search-input="searchInput"
    />
    <button
      v-if="!isAddingPost"
      @click="() => (isAddingPost = true)"
      class="mx-2 btn btn-accent btn-lg"
    >
      Add post
    </button>
    <AddPostForm @cancel-adding="handleCancelAdding" @add="handleAdd" v-else />
  </div>
</template>

<style lang="scss" scoped></style>
