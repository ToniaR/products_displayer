import { createStore } from 'vuex'

const store = createStore({
    state: {
        favoritesAmount: 0,
        titleApp: 'this is store'

    },
    mutations: {
        addItemToFavorites(state) {
            state.favoritesAmount = state.favoritesAmount+1;
        },
        removeItemToFavorites(state) {
            state.favoritesAmount = state.favoritesAmount--;
        }
    }
})

export default store;