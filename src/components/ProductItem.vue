<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import StarIcon from '@/assets/icons/star.svg?component'
import ShoppingBagIcon from '@/assets/icons/cart-shopping.svg?component'
import { store } from '@/store/index'

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    components: {
        ShoppingBagIcon,
        StarIcon
    },
    setup() {

        function addToFavorites (e) {

            e.preventDefault();
            const btnEl = e.target;
            
            const action = btnEl.classList.contains('animated') ;
            console.log(1, action)

            if (btnEl.classList.contains('animated')) {
                btnEl.classList.remove('animated');
                store.commit('removeItemToFavorites');
            } else {
                btnEl.classList.add('animated');
                store.commit('addItemToFavorites');
            }
        }

        return { addToFavorites }
    },
}


</script>

<template>
  <div class="product-wrapper">
    <img src="@/assets/images/fallbackImage.jpg" class="product-wrapper__image" />
    <div class="product-wrapper__content">
        <section class="product-wrapper__attributes-group">
            <p class="product-wrapper__name">{{ product.articleDescription }}</p>
            <p class="product-wrapper__quality">{{ product.qualityName }}</p>
        </section>
        <star-icon class="product-wrapper__favorites-btn-icon"  @click="addToFavorites"/>
    </div>
    <button class="product-wrapper__add-btn">
        <shopping-bag-icon class="product-wrapper__add-btn-icon" />
        Add to basket
    </button>
  </div>
</template>

<style scoped lang="scss">
.product-wrapper {
    color: var(--product-text-color);

    &__image {
        height: 300px;
        width: 100%;
        border-radius: 7px;
        object-fit: cover;
    }

    &__name {
        font-weight: bold;
    }

    &__favorites-btn {
        border: 0;
        background: transparent;
        color: var(--product-text-color);
        outline: none;
        width: 1.2rem;
    }

    &__favorites-btn-icon {
        width: 1.2rem;
    }

    &__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin: 1rem 0;
    }

    &__attributes-group {
        text-align: left;
    }

    &__name {
        font-size: 1rem;
        font-weight: 700;
    }

    &__quality {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--product-secondary-text-color);
    }

    &__add-btn {
        width: 100%;
        height: 42px;
        background-color: var(--button-bg-color);
        font-weight: 400;
        outline: none;
        line-height: 100%;
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        color: #ffffff;
        cursor: pointer;
        transition: border-color 0.25s;
        cursor: pointer;
    }

    &__add-btn-icon {
        width: 1rem;
        padding-right: 5px;
        fill: var(--icon-color);
        cursor: pointer;
    }

}

.animated {
    fill: var( --accent-color);
}
</style>
