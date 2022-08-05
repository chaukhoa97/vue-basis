<script setup lang="ts">
import { defineProps, ref } from 'vue'
const props = defineProps<{
  post: any
  handleEdit: () => void
}>()
defineEmits<{
  'delete-post': any
}>()

const postRef = ref(props.post)
const isEdit = ref(false)

const handleEdit = () => {
  isEdit.value = true
}

const handleSave = () => {
  isEdit.value = false
}
</script>

<template>
  <div>
    <span v-if="isEdit">
      <input v-model="postRef.title" />
    </span>
    <span v-else>
      {{ postRef.title }}
    </span>
    <span @click="$emit('delete-post')">X</span>
    <span v-if="!isEdit" @click="handleEdit">Edit</span>
    <span v-else @click="handleSave">Save</span>
  </div>
</template>

<style scoped></style>
