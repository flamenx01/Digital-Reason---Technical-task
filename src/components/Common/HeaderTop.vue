<template>
  <div class="header__top container">
    <div class="header__top__search">
      <router-link class="button" aria-label="Homepage" to="/">Search</router-link>
    </div>
    <div class="header__top__actions">
      <router-link class="button" aria-label="Homepage" to="/">Learn</router-link>
      <router-link class="button" aria-label="Homepage" to="/">Donate</router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.header__top {
  display: flex;
  justify-content: space-between;
  &__search {
    padding: 0.6rem;
    a {
      position: relative;
      text-decoration: none;
      padding: 0.6rem;
    }
  }
  &__actions {
    padding: 0.6rem;
    a {
      position: relative;
      text-decoration: none;
      background: #cf1b46;
      color: #fff;
      padding: 0.6rem;
    }
  }
}

</style>