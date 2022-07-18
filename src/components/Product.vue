<script setup>
import { ref } from 'vue'
import StarIcon from '@/assets/icons/star.svg?component'

defineProps({
  msg: String
})


</script>

<template>
  <div class="product-wrapper">
    <img src="@/assets/fallbackImage.jpg" class="product-wrapper__image" />
    <div class="product-wrapper__attrs">
        <p class="product-wrapper__name">Pants, blue</p>
        <star-icon />
        <p class="product-wrapper__quality">Slim fit, cotton</p>
    </div>
    <button class="product-wrapper__button">Add to basket</button>
  </div>
</template>

<style scoped lang="scss">
.product-wrapper {
    color: #000000;

    &__image {
        height: 300px;
        width: auto;
        border-radius: 1rem;
        object-fit: fill;
    }
}
</style>
