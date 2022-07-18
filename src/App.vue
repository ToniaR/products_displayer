<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ProductsList from './components/ProductsList.vue'
</script>

<template>
  <div id="app">
    <main class="app-wrapper">
      <products-list />
    </main>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  background: #ffffff;
}

.app-wrapper {
  max-width: 70rem;
  margin: 0 auto;
}
</style>
