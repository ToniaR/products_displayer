import { createStore } from 'vuex';
import axios from 'axios';

export const store = createStore({
    state: {
        productsList: null,
        favoritesAmount: 0,
        searchQueryString: '',
        titleApp: 'this is store'

    },
    mutations: {
        addItemToFavorites(state) {
            state.favoritesAmount++;
        },
        removeItemToFavorites(state) {
            state.favoritesAmount--;
        },
        updateProducts(state, payload) {
            state.productsList = payload;
        },
        updateSearchQuery(state, payload) {
            state.searchQueryString = payload;
        }
    },
    actions: {
        getSearchResults(state, payload) {

        }
    }
})
