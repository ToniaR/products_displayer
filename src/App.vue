<script setup>
import ProductsList from '@/components/ProductsList.vue'
import HeadSection from '@/components/HeadSection.vue'

</script>

<template>
  <head-section />
  <main class="app-wrapper">
    <products-list />
  </main>
</template>

<style lang="scss">
@import '@/assets/styles/main.scss';

* {
  padding: 0;
  margin: 0;
}

body {
  background: var(--main-bg-color);
  font-family:  'Roboto', sans-serif;
}

.app-wrapper {
  max-width: 100%;
  margin: 0 auto;
}

#app {
  max-width: 70%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  @media screen and (min-width: 1024px){
    max-width: 60rem;    
  }
}
</style>
