<script>
import { ref, watch } from 'vue'
import { store } from '@/store/index'

export default {
    setup() {
        let searchQuery = ref("");

        watch(() => searchQuery.value, (old, newVal) => {
            store.commit('updateSearchQuery', newVal);
        })

        return { searchQuery };
    }
}


</script>

<template>
    <div class="search-wrapper">
        <input type="text" v-model="searchQuery" placeholder="Search" class="search-wrapper__input"/>
    </div>
</template>

<style lang="scss" scoped>

.search-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    &__input {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        margin: 2rem 0;
        background-color: var(--input-bg-color);
        border: 0;
        border-radius: 7px;
        padding: 7px 20px;
        font-size: 0.875rem;
        font-weight: 100;
    }
}

</style>