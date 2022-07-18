<script setup>
import { ref } from 'vue'

import Product from '@/components/Product.vue'

defineProps({
  products: []
})


</script>

<template>
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
    grid-template-columns: 1;
    grid-gap: 2rem;

    @media screen and (min-width: 567px) {
        grid-template-columns: repeat(2,minmax(45%, 1fr));
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
