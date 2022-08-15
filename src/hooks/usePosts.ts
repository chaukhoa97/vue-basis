import { ref } from 'vue'

export default function usePosts() {
  const data = ref<any[]>([])
  const error = ref()
  const isLoading = ref(false)

  async function fetchData() {
    isLoading.value = true
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      data.value = await response.json()
    } catch (err) {
      error.value = err
    }
    isLoading.value = false
  }
  fetchData()

  const addPost = (title: string) => {
    data.value.push({ title })
  }

  return { posts: data, addPost }
}
