import { ref } from 'vue'

export default function usePosts() {
  const posts = ref<string[]>([])
  posts.value = ['post 1', 'post 2']

  const addPost = (post: string) => {
    posts.value.push(post)
  }
  return {
    posts,
    addPost,
  }
}
