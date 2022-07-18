<script setup>
import { ref } from 'vue'
import StarIcon from '@/assets/icons/star.svg?component'
import ShoppingBagIcon from '@/assets/icons/cart-shopping.svg?component'



</script>

<template>
  <div class="product-wrapper">
    <img src="@/assets/images/fallbackImage.jpg" class="product-wrapper__image" />
    <div class="product-wrapper__content">
        <section class="product-wrapper__attributes-group">
            <p class="product-wrapper__name">Pants, blue</p>
            <p class="product-wrapper__quality">Slim fit, cotton</p>
        </section>
        <button class="product-wrapper__favorites-btn">
            <star-icon class="product-wrapper__favorites-btn-icon" />
        </button>
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
        // background: linear-gradient(45deg, #7646e8, #e24040);
        background: var(--button-bg-color);
        border: 0;
        font-weight: 400;
        outline: none;
        line-height: 100%;
    }

    &__add-btn-icon {
        width: 1rem;
        padding-right: 5px;
        fill: var(--icon-color);
    }
}
</style>
