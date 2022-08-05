import { onMounted, ref } from 'vue'

export default function usePosts() {
  const posts = ref<any[]>([])

  const getPosts = async () =>
    (posts.value = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
    ).then((res) => res.json()))

  onMounted(() => getPosts())

  const addPost = (postTitle: string) => {
    posts.value.push({ title: postTitle })
    console.log('add')
  }

  return {
    posts,
    addPost,
  }
}
