<script>
import ProductItem from '@/components/ProductItem.vue'

import { onMounted, computed } from 'vue'
import { store } from '@/store/index'

export default {
    components: {
        ProductItem
    },
    setup() {
        onMounted(() => {
            store.dispatch('getAllProducts')
        })

        const errorMessage = computed(() => store.state.requestErrorMsg);

        const productsList = computed(() => {
            if (store.state.searchQueryString.trim().length <= 1) {
                return store.state.productsList;
            } else {
                const query = store.state.searchQueryString.trim().toLowerCase();
                const products = store.state.productsList;
                let filteredProducts = [...products].filter(product => product.articleDescription.trim().toLowerCase().includes(query));
                return filteredProducts;
            }
        });

        return { productsList, errorMessage }
    }

}

</script>

<template>
    <span v-if="errorMessage">{{ errorMessage }}</span>
    <span v-else-if="!productsList">Loading...</span>
    <div v-else class="products-list">
        <product-item v-for="(item, key) in productsList" 
            :product="item"
            :key="key"
        />
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
