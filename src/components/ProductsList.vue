<script>
import ProductItem from '@/components/Product.vue'

import { ref, onMounted, computed } from 'vue'
import axios from 'axios';
import { store } from '@/store/index'

export default {
    components: {
        ProductItem
    },
    setup() {


        onMounted(() => {
            const API_URL = "https://tgsaykqet1.execute-api.us-west-2.amazonaws.com/development/products";
            axios.get(API_URL, { headers: {
                "X-API-KEY": "ojRgdxp0s99FyJXsD7Oku3pzdPOJfc3699njTmwO",
            }})
            .then(result => {
                const { products } = result.data;
                const filteredProducts = products.filter(product => product.productGroup === "41");
                store.commit('updateProducts', filteredProducts);
            })
            .catch(error => console.log(error)); 

        })

        const productsList = computed(() => {
            if (store.state.searchQueryString.trim().length === 0) {
                return store.state.productsList;
            } else {
                let query = store.state.searchQueryString.trim().toLowerCase();
                let foo = [...store.state.productsList].filter(product => product.articleDescription.trim().toLowerCase().includes(query));
                return foo;
            }
        });

        return { productsList }
    }

}

</script>

<template>
    <div class="products-list">
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
