<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineEmits<{
  (e: 'add', title: string): void
  (e: 'cancel-adding'): void
}>()

const inputValue = ref('')
const searchInputChangeCount = ref(0)

const inputElementRef = ref<HTMLInputElement>(null!)
onMounted(() => {
  inputElementRef.value.focus()
})

const handleInputChange = () => {
  searchInputChangeCount.value++
}
</script>

<template>
  <input
    placeholder="Enter post title"
    @input="handleInputChange"
    class="input input-md input-primary w-[50%] mx-2"
    v-model="inputValue"
    @keyup.enter="$emit('add', inputValue)"
    @keyup.esc="$emit('cancel-adding')"
    ref="inputElementRef"
  />
  <button @click="$emit('add', inputValue)" class="mx-2 btn btn-accent btn-lg">
    Add
  </button>
  <button
    @click="$emit('cancel-adding')"
    class="mx-2 btn btn-accent btn-lg btn-outline"
  >
    Cancel
  </button>
  Input has changed {{ searchInputChangeCount }} times.
</template>

<style scoped></style>
