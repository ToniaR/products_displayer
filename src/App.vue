<script>
import ProductsList from '@/components/ProductsList.vue'
import SearchField from '@/components/Search.vue'
import FavoriteBtn from '@/components/Favorites.vue'

export default {
    components: {
      ProductsList,
      SearchField,
      FavoriteBtn
    }
}
</script>

<template>
  <header class="header-wrapper">
    <search-field />
    <favorite-btn />
  </header>
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

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
