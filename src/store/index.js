import { createStore } from 'vuex';
import { api } from '@/api/index'

export const store = createStore({
    state: {
        productsList: null,
        favorites: [],
        searchQueryString: ''

    },
    mutations: {
        addItemToFavorites(state, payload) {
            state.favorites.push(payload);
        },
        removeItemToFavorites(state, payload) {
            state.favorites.splice(payload, 1);
        },
        updateProducts(state, payload) {
            state.productsList = payload;
        },
        updateSearchQuery(state, payload) {
            state.searchQueryString = payload;
        }
    },
    actions: {
        getAllProducts(state, payload) {
            api.get()
            .then(result => {
                const { products } = result.data;
                let filteredProducts = []
                
                products.forEach(element => {
                    if (element.productGroup === "41") filteredProducts.push(element);
                });

                const productsfilteredByID = filteredProducts.filter((product, index, self) =>
                    index === self.findIndex((i) => (
                        i.id === product.id
                    ))
                )

                store.commit('updateProducts', productsfilteredByID);
            })
            .catch(error => {
                throw new Error(error)
            })
        }
    }
})
