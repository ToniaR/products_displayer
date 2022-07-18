<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  msg: String
})


</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
