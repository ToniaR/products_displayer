<script setup>
import { ref } from 'vue'

import Product from '@/components/Product.vue'

defineProps({
  msg: String
})


</script>

<template>
    <h1>Products</h1>
    <div class="products-list">
        <product />
        <product />
        <product />
        <product />
        <product />
        <product />
    </div>
</template>

<style scoped lang="scss">
.products-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
}
</style>
