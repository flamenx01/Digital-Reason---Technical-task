<template>
  <header>
    <header-top />
    <header-nav />
  </header>
</template>

<script setup>
import HeaderTop from '@/components/common/HeaderTop.vue';
import HeaderNav from '@/components/common/HeaderNav.vue';
</script>

<style lang="scss">
  header {
    border-bottom: 1px solid #ccc;
  }
</style>