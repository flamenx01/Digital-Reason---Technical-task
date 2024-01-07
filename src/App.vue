<template>
  <the-header />
  <router-view></router-view>
  <the-footer />
</template>

<script setup>
import theHeader from '@/components1/Common/TheHeader.vue';
import theFooter from '@/components1/Common/TheFooter.vue';
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';
</style>