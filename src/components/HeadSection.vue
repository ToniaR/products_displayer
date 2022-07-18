<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex';

import StarIcon from '@/assets/icons/star.svg?component'
import ShoppingBagIcon from '@/assets/icons/cart-shopping.svg?component'

const store = useStore()

let searchQuery = ref("");

const favoritesAmount = computed(() => {
    return store.state.favoritesAmount > 0 ? store.state.favoritesAmount : '';
})

</script>

<template>
    <div class="head-wrapper">
        <input type="text" v-model="searchQuery" placeholder="Search" class="head-wrapper__search"/>
        <section>
            <div class="head-wrapper__icon-group">
                <star-icon class="head-wrapper__icon" />
                <span class="head-wrapper__icon-number">{{ favoritesAmount }}</span>
            </div>
            <!-- TODO: uncomment
            <div class="head-wrapper__icon-group">
                <shopping-bag-icon class="head-wrapper__icon" />
                <span class="head-wrapper__icon-number">1</span>
            </div>
            -->
        </section>
    </div>
</template>

<style lang="scss" scoped>

.head-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }

    &__search {
        width: 70%;
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

    &__icon-group {
        width: 1.5rem;
        position: relative;
        display: inline-block;
        margin-left: 1rem;
    }

    &__icon {
        padding-right: 5px;
    }

    &__icon-number {
        position: absolute;
        top: -14px;
        display: block;
        color: var(--icon-secondary-color);
        right: 0;
        font-size: 10px;
    }
}

</style>