<script>
import ProductItem from '@/components/ProductItem.vue'

import { onMounted, computed } from 'vue'
import axios from 'axios';
import { store } from '@/store/index'

export default {
    components: {
        ProductItem
    },
    setup() {


        onMounted(() => {
            const API_URL = import.meta.env.VITE_API_URL;
            axios.get(API_URL, { headers: {
                "X-API-KEY": import.meta.env.VITE_API_KEY,
            }})
            .then(result => {
                const { products } = result.data;
                let filteredProducts = []
                products.forEach(element => {
                    if (filteredProducts.filter((e) => e.id !== element.id ) && element.productGroup === "41") filteredProducts.push(element);
                });
                
                store.commit('updateProducts', filteredProducts);
            })
            .catch(error => console.log(error)); 

        })

        const productsList = computed(() => {
            if (store.state.searchQueryString.trim().length === 0) {
                return store.state.productsList;
            } else {
                let query = store.state.searchQueryString.trim().toLowerCase();
                let filteredProducts = [...store.state.productsList].filter(product => product.articleDescription.trim().toLowerCase().includes(query));
                return filteredProducts;
            }
        });

        return { productsList }
    }

}

</script>

<template>
    <span v-if="!productsList">Loading...</span>
    <div v-else class="products-list">
        <product-item v-for="(item, key) in productsList" :product="item"  :key="key" />
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
