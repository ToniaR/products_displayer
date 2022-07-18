<script>
import { computed } from 'vue'
import { store } from '@/store/index'

import StarIcon from '@/assets/icons/star.svg?component'

export default {
    components: {
        StarIcon
    },
    setup() {
        const favoritesAmount = computed(() => {
            return store.state.favoritesAmount > 0 ? store.state.favoritesAmount : '';
        });

        return { favoritesAmount };
    }
}


</script>

<template>
    <div class="icon-wrapper">
        <star-icon class="icon-wrapper__item" />
        <span class="icon-wrapper__icon-number">{{ favoritesAmount }}</span>
    </div>
</template>

<style lang="scss" scoped>

.icon-wrapper {
    width: 1.5rem;
    position: relative;
    display: inline-block;
    margin-left: 1rem;

    &__item {
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