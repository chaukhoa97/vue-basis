<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  post: any
  searchInput: string
}>()

const editInputValue = ref<string>(props.post.title)
const title = ref<string>(props.post.title)
const isEdit = ref(false)
const removed = ref(false)

const highlightTitle = (title: string, searchInput: string) => {
  const regex = new RegExp(searchInput, 'gi')
  return title.replace(
    regex,
    (match) => `<span class="text-fuchsia-900 bg-fuchsia-300">${match}</span>`,
  )
}

const handleEditClick = () => {
  isEdit.value = true
}

const handleEditSave = () => {
  title.value = editInputValue.value
  isEdit.value = false
}

const handleEditCancel = () => {
  editInputValue.value = title.value
  isEdit.value = false
}

const handleDeletePost = () => {
  removed.value = !removed.value
}
</script>

<template>
  <template v-if="!removed">
    <div v-if="isEdit">
      <input
        v-if="isEdit"
        v-model="editInputValue"
        class="mx-2 input input-md input-primary w-[50%]"
      />
      <span @click="handleEditSave" class="mx-2 btn btn-sm btn-success"
        >Save</span
      >
      <span @click="handleEditCancel" class="mx-2 btn btn-sm btn-secondary"
        >Cancel</span
      >
    </div>
    <div v-else>
      <span v-html="highlightTitle(title, searchInput)" class="m-2" />
      <span @click="handleEditClick" class="mx-2 btn btn-primary btn-sm"
        >Edit</span
      >
      <span @click="handleDeletePost" class="btn btn-error btn-outline btn-sm"
        >X</span
      >
    </div>
  </template>
  <i v-else @click="handleDeletePost" class="mx-2 cursor-pointer">Undo</i>
</template>

<style scoped></style>
